import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/index.js";
import { app } from "./app.js";
import { PORT } from "./constants.js";

//clsLoad environment variables
// dotenv.config({
//   path: "./env",
// });

connectDB()
  .then(() => {
    app.listen(5000, () => {
      console.log(
        `Server running Successfully on port: http://localhost:${process.env.PORT || 5000}`
      );
    });
  })
  .catch((error) => console.log(`MONGODB Connection Failed! ${error}`));
