import { FeaturedCategories } from "../UserModels/featuredCategories.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// ✅ Create a Featured Category
const createFeaturedCategory = asyncHandler(async (req, res) => {
  console.log("Request Body:", req.body);
  const {
    name,
    subCategories,
    quantity,
    colors,
    title,
    description,
    image,
    mainCategories,
  } = req.body;

  if (
    ![name, subCategories, quantity, colors, title, description, image].every(
      Boolean
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const featuredCategory = await FeaturedCategories.create({
    name,
    subCategories,
    quantity,
    colors,
    title,
    description,
    image,
    mainCategories,
  });

  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        featuredCategory,
        "Featured Category created successfully"
      )
    );
});

// ✅ Get All Featured Categories
const getAllFeaturedCategories = asyncHandler(async (req, res) => {
  const categories = await FeaturedCategories.find().populate("mainCategories");

  if (!categories.length) {
    throw new ApiError(404, "No Featured Categories found");
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        categories,
        "Featured Categories retrieved successfully"
      )
    );
});

// ✅ Get One Featured Category by ID
const getOneFeaturedCategory = asyncHandler(async (req, res) => {
  console.log("Received Params:", req.params);
  const { categoryId } = req.params;

  if (!categoryId) {
    throw new ApiError(400, "Category ID is required");
  }

  const category =
    await FeaturedCategories.findById(categoryId).populate("mainCategories");

  if (!category) {
    throw new ApiError(404, "Featured Category not found");
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, category, "Featured Category retrieved successfully")
    );
});

// ✅ Update a Featured Category
const updateFeaturedCategory = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;
  console.log("Update Request for:", categoryId);
  const updatedData = req.body;

  if (!categoryId) {
    throw new ApiError(400, "Category ID is required");
  }

  const category = await FeaturedCategories.findByIdAndUpdate(
    categoryId,
    updatedData,
    { new: true }
  );

  if (!category) {
    throw new ApiError(404, "Featured Category not found");
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, category, "Featured Category updated successfully")
    );
});

// ✅ Delete a Featured Category
const deleteFeaturedCategory = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;

  if (!categoryId) {
    throw new ApiError(400, "Category ID is required");
  }

  const category = await FeaturedCategories.findByIdAndDelete(categoryId);

  if (!category) {
    throw new ApiError(404, "Featured Category not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, null, "Featured Category deleted successfully"));
});

export {
  createFeaturedCategory,
  getAllFeaturedCategories,
  getOneFeaturedCategory,
  updateFeaturedCategory,
  deleteFeaturedCategory,
};
