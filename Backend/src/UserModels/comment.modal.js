import { mongoose, Schema } from "mongoose";

const commentSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    commentText: {
      type: String, // The actual comment
    },
    createdAt: {
      type: Date,
      default: Date.now, // Timestamp for the comment
    },
    imageFiles: {
      type: [String], // Cloudinary URLs or file paths
      required: false, // Optional field if images are not always required
    },
  },
  {
    timestamps: true,
  }
);

export const Comment = mongoose.model("Comment", commentSchema);
