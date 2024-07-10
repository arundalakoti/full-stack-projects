import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import courseRoutes from "./routes/course.routes.js"
import errorMiddleware from "./middlewares/error.middleware";
import morgan from "morgan";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

//for producing dev logs
app.use(morgan("dev"));

app.use(cookieParser());

app.use("api/v1/user",userRoutes);
app.use("api/v1/courses",courseRoutes);

app.all("*", (req, res) => {
  res.status(404).send("OOPS!! 404 page not found");
});

// in all routes function we are calling next if error occurs and passing it an object. 
// that next will come in this file and there is no function that handles that, hence errorMiddleware.
app.use(errorMiddleware);

export default app;
