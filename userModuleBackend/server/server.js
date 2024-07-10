import app from "./app";
import { config } from "dotenv";
import connectToDb from "./config/dbConnection";
import cloudinary from "cloudinary";

config();

const PORT = process.env.PORT || 5000;

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  api_key: process.env.CLOUDINARY_API_KEY
})

app.listen(PORT, async () => {
  await connectToDb();
  console.log(`App is running at http:localhost:${PORT}`);
});
