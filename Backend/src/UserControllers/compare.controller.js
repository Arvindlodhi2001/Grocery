import { Product } from "../UserModels/product.modal.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const compareProducts = asyncHandler(async (req, res) => {
  console.log("Hello");
  const { productIds } = req.body; // Expecting an array of product IDs

  // Validation: Ensure at least 2 products are provided for comparison
  if (!productIds || !Array.isArray(productIds) || productIds.length < 2) {
    throw new ApiError(400, "Provide at least two product IDs for comparison.");
  }

  // Fetch products from DB
  const products = await Product.find({ _id: { $in: productIds } });

  if (products.length !== productIds.length) {
    throw new ApiError(404, "Some products were not found.");
  }

  // Sorting Logic to Determine Best Product:
  const bestProduct = products.sort((a, b) => {
    // Higher rating is better
    if (b.rating !== a.rating) return b.rating - a.rating;

    // Lower price is better if ratings are the same
    if (a.price !== b.price) return a.price - b.price;

    // Higher stock is better if ratings and price are similar
    return b.stock - a.stock;
  })[0];

  return res.status(200).json({
    success: true,
    message: "Products retrieved successfully for comparison.",
    products,
    bestRecommendation: {
      _id: bestProduct._id,
      productName: bestProduct.productName,
      price: bestProduct.price,
      rating: bestProduct.rating,
      stock: bestProduct.stock,
      category: bestProduct.category,
      brand: bestProduct.brand,
      imageFiles: bestProduct.imageFiles,
      suggestion:
        "✅ This product is the best choice based on rating, price, and availability.",
    },
  });
});

export { compareProducts };

//http://localhost:5000/api/v1/users/products/comare

// {
//     "productIds": ["67abf6e7c0123aa2eb52585d",  "67abf9718c9be1505d8f5d90"]
//   }
