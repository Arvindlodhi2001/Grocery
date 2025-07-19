import { Comment } from "../UserModels/comment.modal.js";
import { Product } from "../UserModels/product.modal.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// ✅ Upload Comment
const uploadComment = asyncHandler(async (req, res) => {
  const { productId, userId, commentText } = req.body;

  // Validate fields
  if (
    [productId, userId, commentText].some(
      (field) => !field || field.trim() === ""
    )
  ) {
    throw new ApiError(400, "Please fill all fields");
  }

  const formattedCommentText = Array.isArray(commentText)
    ? commentText.join(" ")
    : commentText;

  let imageFiles = [];
  if (req.files && req.files.length > 0) {
    for (const file of req.files) {
      try {
        const uploadedImage = await uploadOnCloudinary(file.path);
        if (uploadedImage && uploadedImage.url) {
          imageFiles.push(uploadedImage.url);
        }
      } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        throw new ApiError(500, "Failed to upload comment images");
      }
    }
  }

  try {
    //  Create comment
    const comment = await Comment.create({
      productId,
      userId,
      commentText: formattedCommentText,
      imageFiles,
    });

    //  Push comment ID into the Product's comments array
    await Product.findByIdAndUpdate(
      productId,
      { $push: { comments: comment._id } },
      { new: true, useFindAndModify: false }
    );

    return res
      .status(201)
      .json(new ApiResponse(201, comment, "Comment uploaded successfully"));
  } catch (error) {
    console.error("Error uploading comment:", error);
    throw new ApiError(500, "Comment creation failed");
  }
});

// ✅ Delete Comment
const deleteComment = asyncHandler(async (req, res) => {
  const { commentId, userId } = req.body;

  // Validate fields
  if (!commentId || !userId) {
    throw new ApiError(400, "Comment ID and User ID are required");
  }

  // Find the comment
  const comment = await Comment.findOne({ _id: commentId, userId });

  if (!comment) {
    throw new ApiError(404, "Comment not found or user unauthorized");
  }

  try {
    // Remove the comment from the product's comment list
    await Product.findByIdAndUpdate(
      comment.productId,
      { $pull: { comments: commentId } },
      { new: true, useFindAndModify: false }
    );

    // Delete comment
    await Comment.findByIdAndDelete(commentId);

    return res
      .status(200)
      .json(new ApiResponse(200, null, "Comment deleted successfully"));
  } catch (error) {
    console.error("Error deleting comment:", error);
    throw new ApiError(500, "Failed to delete comment");
  }
});

// ✅ Get All Comments for a Product
const getAllComments = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  // Validate productId
  if (!productId) {
    throw new ApiError(400, "Product ID is required");
  }

  try {
    // Find comments for the given product and populate user details if needed
    const comments = await Comment.find({ productId }).populate(
      "userId",
      "name email"
    );

    return res
      .status(200)
      .json(new ApiResponse(200, comments, "Comments fetched successfully"));
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw new ApiError(500, "Failed to fetch comments");
  }
});

export { uploadComment, deleteComment, getAllComments };

