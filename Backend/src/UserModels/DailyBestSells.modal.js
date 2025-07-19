import mongoose, { Schema } from "mongoose";

const DailyBestSellsSchema = new Schema(
  {
    tag: {
      type: String,
      required: true,
      index: true,
    },

    category: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category", // Reference to Category schema
        required: true,
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

    imageFiles: {
      type: [String], // Cloudinary URLs for images
      required: true,
    },

    thumbnail: {
      type: String,
      required: true,
    },

    views: {
      type: Number,
      default: 0,
    },

    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },

  {
    timestamps: true,
  }
);

export const DailyBestSells = mongoose.model(
  "DailyBestSells",
  DailyBestSellsSchema
);
