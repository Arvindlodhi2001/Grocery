import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { MONGODB_URI } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${MONGODB_URI}`);
    console.log(
      `  MongoDB Connection !!! DB HOST ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error in DataBase Connection -->", error);
    process.exit(1);
  }
};

export default connectDB;
