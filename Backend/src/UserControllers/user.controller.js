import { User } from "../UserModels/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import bcrypt from "bcrypt";

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { username, email, Mobile, password } = req.body;

    console.log("Received Data:", username, email, Mobile, password);

    // ✅ Validate fields
    if (
      [username, email, Mobile, password].some(
        (field) => !field || field.trim() === ""
      )
    ) {
      throw new ApiError(400, "All fields are required");
    }

    // ✅ Check if email exists
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      throw new ApiError(409, "Email is already registered");
    }

    // ✅ Handle Avatar Upload
    if (!req.file) {
      throw new ApiError(400, "Avatar must be uploaded");
    }

    const avatarLocalPath = req.file.path;
    console.log("Avatar Path:", avatarLocalPath);

    let avatarImage;
    try {
      avatarImage = await uploadOnCloudinary(avatarLocalPath);
      console.log("Cloudinary URL:", avatarImage?.url);
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      throw new ApiError(500, "Failed to upload avatar");
    }

    if (!avatarImage || !avatarImage.url) {
      throw new ApiError(500, "Avatar upload failed");
    }

    // ✅ Create User
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      Mobile,
      password,
      avatar: avatarImage.url,
    });

    // ✅ Return Created User (Hide sensitive info)
    const createdUser = await User.findById(user._id).select(
      "-address -Order -cart -password -refreshToken"
    );

    res
      .status(201)
      .json(new ApiResponse(201, createdUser, "User registered successfully"));
  } catch (error) {
    console.error("Register Error:", error);
    throw new ApiError(500, "Internal Server Error");
  }
});

const userRemoveAccount = asyncHandler(async (req, res) => {
  const { userId, password } = req.body;
  console.log("userId-->", userId, password);

  // Validation Check
  if (!userId || !password) {
    throw new ApiError(400, "User ID and Password is required");
  }

  // Check is user is valid or not valid
  const user = await User.findById({ _id: userId });
  if (!user) {
    throw new ApiError(404, " ❌ User not found");
  }

  console.log("user-->", user);
  // ✅  Compare password with hashed password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, user.hash);
  console.log("my salt--->", salt);
  console.log("hashedPassword--->", hashedPassword);
  const isMatch = await bcrypt.compare(hashedPassword, user.password);
  console.log("Password Match:", isMatch);

  if (!isMatch) {
    throw new ApiError(401, "❌ Invalid credentials");
  }
  // Check if user is active or not active

  try {
    // ✅ Remove User
    const removeUser = await User.deleteOne({ _id: userId });
    console.log(" ✅  User Account Remove Process Successfully");
    return res
      .status(400)
      .json(
        new ApiResponse(
          201,
          removeUser,
          " ✅  User Account Remove Process Successfully "
        )
      );
  } catch (error) {
    console.log(" ❌ User Account Remove Process Fail -->", error);
    return res
      .status(400)
      .json(new ApiResponse(400, null, "User Account Remove Process Fail "));
  }
});

export { registerUser, userRemoveAccount };
