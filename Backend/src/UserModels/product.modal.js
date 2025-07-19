import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    tag: {
      type: String,
      required: true,
      index: true,
    },

    category: [
      {
        type: String,
        required: true,
        // type: Schema.Types.ObjectId,
        // ref: "Category", // Reference to Category schema
        // required: true,
      },
    ],

    brand: {
      type: String,
      required: true,
      index: true,
    },

    productName: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    oldPrice: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
    },

    stock: {
      type: Number,
      required: true,
    },
    quantity: [
      {
        type: String,
        required: true,
      },
    ],
    imageFiles: {
      type: [String], // Cloudinary URLs for images
      required: false,
    },

    thumbnail: {
      type: String,
      required: false,
    },

    views: {
      type: Number,
      default: 0,
    },

    condition: {
      type: String,
    },

    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],

    color: [
      {
        type: String,
        require: true,
      },
    ],
  },

  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", productSchema);
