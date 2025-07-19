import { Product } from "../../UserModels/product.modal.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";

const productUpload = asyncHandler(async (req, res) => {
  console.log("🟢 Received Product Upload Request");
  console.log("📂 Request Body:", req.body);
  console.log("📸 Uploaded Files:", req.files);
  const {
    tag, //
    category, //
    brand, //
    productName, //
    title, //
    description, //
    price, //
    oldPrice, //
    rating, //
    stock, //
    condition,
    color,
  } = req.body;

  const formattedDescription = Array.isArray(description)
    ? description.join(" ") // Convert array to a single string
    : description;

  console.log(
    tag,
    category,
    brand,
    productName,
    title,
    description,
    price,
    oldPrice,
    rating,
    stock,
    condition,
    color
  );

  //  Validate fields
  if (
    [
      tag,
      category,
      brand,
      productName,
      title,
      description,
      price,
      oldPrice,
      rating,
      stock,
      condition,
      color,
    ].some((field) => !field || field === "")
  ) {
    throw new ApiError(400, "Please fill all the fields");
  }

  if (!req.files || req.files.length === 0) {
    throw new ApiError(400, "Product images must be uploaded");
  }

  let imageFiles = [];
  for (const file of req.files) {
    try {
      const uploadedImage = await uploadOnCloudinary(file.path);
      if (uploadedImage && uploadedImage.url) {
        imageFiles.push(uploadedImage.url);
      }
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      throw new ApiError(500, "Failed to upload product images");
    }
  }

  if (imageFiles.length === 0) {
    throw new ApiError(500, "Image upload failed");
  }

  // Create Product
  const product = await Product.create({
    tag,
    category,
    brand,
    productName,
    title,
    description: formattedDescription,
    price,
    oldPrice,
    rating,
    condition,
    stock,
    color,
    imageFiles,
    thumbnail: imageFiles[0],
  });

  res
    .status(201)
    .json(new ApiResponse(201, product, "Product created successfully"));
});

//---------------------------------------------------------------------------------
const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({}); // Fetch all products from DB

    if (!products || products.length === 0) {
      throw new ApiError(404, "No products found");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, products, "Products fetched successfully"));
  } catch (error) {
    console.error("Error fetching products:", error);
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Failed to fetch products"));
  }
});
//---------------------------------------------------------------------------------
const getProductById = asyncHandler(async (req, res) => {
  const productId = req.params.id;

  if (!productId) {
    throw new ApiError(400, "Product ID is required");
  }

  try {
    const product = await Product.findById(productId);

    if (!product) {
      throw new ApiError(404, "Product not found");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, product, "Product fetched successfully"));
  } catch (error) {
    console.error("Error fetching product:", error);
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Failed to fetch product"));
  }
});
//---------------------------------------------------------------------------------
const editProductById = async (req, res) => {
  try {
    const { id } = req.params; // Get product ID from request parameters
    const updatedData = req.body; // Get updated product details from request body

    // Find the product and update it
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found!" });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
//---------------------------------------------------------------------------------

const productDelete = asyncHandler(async (req, res) => {
  const productId = req.params.id;

  // Validation
  if (!productId) {
    throw new ApiError(400, "Product ID is required");
  }

  // Find Product
  const product = await Product.findById(productId);
  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  try {
    // Delete Product
    await Product.deleteOne({ _id: productId });

    return res
      .status(200)
      .json(new ApiResponse(200, null, "Product deleted successfully"));
  } catch (error) {
    console.log("Error in delete  product :-", error);
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Delete  product process is failed "));
  }
});

export {
  productUpload,
  productDelete,
  getProductById,
  getAllProducts,
  editProductById,
};
