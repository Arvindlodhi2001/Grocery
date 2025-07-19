import dotenv from "dotenv";
dotenv.config();
import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    Mobile: {
      type: String,
      default: "",
      autoIndex: false,
      unique: false,
    },

    avatar: {
      type: String, // Cloudinary URL
      default: "",
    },

    address: [
      {
        type: Schema.Types.ObjectId,
        ref: "Address",
        default: [],
      },
    ],

    Order: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order",
        default: [],
      },
    ],

    cart: {
      type: Schema.Types.ObjectId,
      ref: "AddToCart",
    },

    Wishlist: [
      {
        type: Schema.Types.ObjectId,
        ref: "Wishlist",
        default: [],
      },
    ],

    password: {
      type: String,
      required: [true, "Password must be required !!!"],
    },

    refreshToken: {
      type: String,
      default: "",
    },

    hash: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Check if password is correct
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generate Access Token
userSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRE }
  );
};

userSchema.methods.generateRefreshToken = async function () {
  return jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
  });
};

export const User = mongoose.model("User", userSchema);
