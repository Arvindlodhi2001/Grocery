import { Product } from "../../UserModels/product.modal.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";

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

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------

module.exports = { getAllProducts, getProductById };
