import { Router } from "express";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";
import { upload } from "../../middlewares/multer.middlewares.js";
import {
  productDelete,
  productUpload,
} from "../AdminControllers/productController.js";

import { CreateCategory } from "../AdminControllers/category.controller.js";
import { UploadComment } from "../AdminControllers/comment.controller.js";

UploadComment;

CreateCategory;

const router = Router();

//product router

router.route("/product/upload").post(upload.array("images", 5), productUpload);
router.route("/product/delete/:id").delete(productDelete);

//product router

router.route("/category/upload").post(upload.single("image"), CreateCategory);

// 
router.route("/comment/upload").post(upload.array("images"), UploadComment);

export default router;
