import mongoose, { Schema } from "mongoose";

const addToCartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export const AddToCart = mongoose.model("AddToCart", addToCartSchema);
