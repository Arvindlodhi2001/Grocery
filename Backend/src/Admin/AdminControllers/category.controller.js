import { Category } from "../../UserModels/category.modal.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";

// ✅ Create a Category
const createCategory = asyncHandler(async (req, res) => {
  const { name, title, description } = req.body;
  console.log("My Body -->", req.body);

  if (
    [name, title, description].some((field) => !field || field.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedCategory = await Category.findOne({ name: name.toLowerCase() });
  console.log("existedCategory -->", existedCategory);

  if (existedCategory) {
    throw new ApiError(400, "Category already exists");
  }

  if (!req.file) {
    throw new ApiError(400, "Category image must be uploaded");
  }

  let categoryImage;
  try {
    categoryImage = await uploadOnCloudinary(req.file.path);
    console.log("categoryImage -->", categoryImage);
  } catch (error) {
    throw new ApiError(500, "Failed to upload category image");
  }

  if (!categoryImage || !categoryImage.url) {
    throw new ApiError(500, "Category image upload failed");
  }

  try {
    const category = await Category.create({
      name: name.toLowerCase(),
      title,
      description,
      image: categoryImage.url,
    });

    console.log("category -->", category);

    await category.save();

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create category",
      error: error.message,
    });
  }
});

// ✅ Get All Categories
const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();

  if (!categories.length) {
    throw new ApiError(404, "No categories found");
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, categories, "Categories retrieved successfully")
    );
});

// ✅ Get One Category by ID
const getCategoryById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const category = await Category.findById(id);

  if (!category) {
    throw new ApiError(404, "Category not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, category, "Category retrieved successfully"));
});

// ✅ Update a Category
const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, title, description } = req.body;

  let updateData = { name, title, description };

  if (req.file) {
    try {
      const categoryImage = await uploadOnCloudinary(req.file.path);
      updateData.image = categoryImage.url;
    } catch (error) {
      throw new ApiError(500, "Failed to upload category image");
    }
  }

  const updatedCategory = await Category.findByIdAndUpdate(id, updateData, {
    new: true,
  });

  if (!updatedCategory) {
    throw new ApiError(404, "Category not found");
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, updatedCategory, "Category updated successfully")
    );
});

// ✅ Delete a Category
const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const category = await Category.findById(id);

  if (!category) {
    throw new ApiError(404, "Category not found");
  }

  // Delete category image from Cloudinary
  try {
    await uploadOnCloudinary.uploader.destroy(category.image);
  } catch (error) {
    throw new ApiError(500, "Failed to delete category image");
  }

  await Category.findByIdAndDelete(id);

  res
    .status(200)
    .json(new ApiResponse(200, null, "Category deleted successfully"));
});

export {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
