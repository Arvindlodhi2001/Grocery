import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true, // Removes unnecessary spaces
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true, // Optional field for category details
    },

    image: {
      type: String, // Cloudinary URL or file path
      required: false, // Optional field if you want to display category images
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export const Category = mongoose.model("Category", categorySchema);
