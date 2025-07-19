import { Router } from "express";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";
import { upload } from "../../middlewares/multer.middlewares.js";

import {
  editProductById,
  getAllProducts,
  getProductById,
  productDelete,
  productUpload,
} from "../AdminControllers/productController.js";

import {
  createFeaturedCategory,
  deleteFeaturedCategory,
  getAllFeaturedCategories,
  getOneFeaturedCategory,
  updateFeaturedCategory,
} from "../../UserControllers/featuredCategories.controller.js";

import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../AdminControllers/category.controller.js";

const router = Router();

//product router

router
  .route("/product/upload")
  .post(upload.array("imageFiles", 5), productUpload); //http://localhost:5000/api/v1/admin/product/upload
router.route("/product/delete/:id").delete(productDelete); //http://localhost:5000/api/v1/admin/product/delete/67abf6e7c0123aa2eb52585d
router.route("/product/byId/:id").get(getProductById);
//localhost:5000/api/v1/admin/product/byId/67abf6e7c0123aa2eb52585d
http: router.route("/product/All").get(getAllProducts); //http://localhost:5000/api/v1/admin/product/All
router.route("/product/edit/:id").put(editProductById); //http://localhost:5000/api/v1/admin/product/edit/67abf6e7c0123aa2eb52585d

//---------------------------------------------------------------
//  Category Router

router.route("/category/create").post(upload.single("image"), createCategory);
router.route("/category/getAll").get(getAllCategories);
router.route("/category/getOne/:categoryId").get(getCategoryById);
router.route("/category/update/:categoryId").put(updateCategory);
router.route("/category/delete/:categoryId").delete(deleteCategory);

// featured Categories
router
  .route("/featuredCategories/create")
  .post(upload.single("image"), createFeaturedCategory);
router.route("/featuredCategories/getAll").get(getAllFeaturedCategories);
router
  .route("/featuredCategories/getOne/:categoryId")
  .get(getOneFeaturedCategory);
router
  .route("/featuredCategories/update/:categoryId")
  .put(updateFeaturedCategory);
router
  .route("/featuredCategories/delete/:categoryId")
  .delete(deleteFeaturedCategory);

export default router;
