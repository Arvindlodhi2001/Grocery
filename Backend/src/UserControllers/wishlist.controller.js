import { Wishlist } from "./../UserModels/wishlist.modal.js";
import { Product } from "./../UserModels/product.modal.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

// Add to Wishlist
const addToWishlist = asyncHandler(async (req, res) => {
  console.log("Request Body:", req.body);
  const { userId, productId } = req.body;
  console.log("Hello1");
  console.log(userId, productId);

  if ([userId, productId].some((felid) => !felid || felid.trim() === "")) {
    throw new ApiError(400, "User ID and Product ID are required");
  }

  // Check if product exists
  const product = await Product.findById(productId);
  if (!product) throw new ApiError(404, "Product not found");

  let wishlist = await Wishlist.findOne({ userId });

  if (!wishlist) {
    wishlist = await Wishlist.create({ userId, products: [productId] });
  } else {
    if (!wishlist.products.includes(productId)) {
      wishlist.products.push(productId);
      await wishlist.save();
    }
  }

  res
    .status(200)
    .json({ success: true, message: "Product added to wishlist", wishlist });
});

const getWishlist = asyncHandler(async (req, res) => {
  console.log(req.params);
  const { userId } = req.params;

  if (!userId) throw new ApiError(400, "User ID is required");

  const wishlist = await Wishlist.findOne({ userId }).populate("products");

  if (!wishlist) {
    throw new ApiError(404, "No wishlist found for this user");
  }

  res.status(200).json({ success: true, wishlist });
});

const removeFromWishlist = asyncHandler(async (req, res) => {
  const { userId, productId } = req.body;

  if (!userId || !productId)
    throw new ApiError(400, "User ID and Product ID are required");

  let wishlist = await Wishlist.findOne({ userId });

  if (!wishlist) throw new ApiError(404, "Wishlist not found");

  wishlist.products = wishlist.products.filter(
    (id) => id.toString() !== productId
  );
  await wishlist.save();

  res.status(200).json({
    success: true,
    message: "Product removed from wishlist",
    wishlist,
  });
});

const getOneWishlist = asyncHandler(async (req, res) => {
  console.log("Received Params:", req.params);

  const { userId, productId } = req.params;

  if (!userId || !productId) {
    throw new ApiError(400, "User ID and Product ID are required");
  }

  // Find the wishlist for the specific user
  const userWishlist = await Wishlist.findOne({ userId }).populate("productId");

  if (!userWishlist) {
    throw new ApiError(404, "No wishlist found for this user");
  }

  // Find the specific product in the wishlist
  const product = userWishlist.productId.find(
    (item) => item._id.toString() === productId
  );

  if (!product) {
    throw new ApiError(404, "Product not found in the wishlist");
  }

  return res.status(200).json({
    success: true,
    message: "Product retrieved successfully from wishlist",
    product,
  });
});

export { addToWishlist, getWishlist, removeFromWishlist, getOneWishlist };
