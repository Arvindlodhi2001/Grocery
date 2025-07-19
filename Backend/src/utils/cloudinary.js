import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: "dfxqem8nb",
  api_key: "775734745811181",
  api_secret: "mh6jhHtmT2YOpfbnQXBcJ2KYTDU",
});

// Upload an image
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload the file to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("✅ File uploaded to Cloudinary:", uploadResult.url);

    // Delete the local file after successful upload
    fs.unlink(localFilePath, (err) => {
      if (err) console.error("❌ Failed to delete local file:", err);
    });

    return uploadResult;
  } catch (error) {
    console.error("❌ Cloudinary Upload Error:", error);

    // Ensure local file is deleted if upload fails
    fs.unlink(localFilePath, (err) => {
      if (err)
        console.error("❌ Failed to delete local file after error:", err);
    });

    return null;
  }
};

export { uploadOnCloudinary };
