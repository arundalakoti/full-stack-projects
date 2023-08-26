const express = require("express");
const authRouter = require("./routes/authRoute");
const connectToDb = require("./config/databaseConfig");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

connectToDb();

app.use(cookieParser());
app.use(express.json());

//allow CLIENT_URL to access anything and credentials --> to pass cookies
//check in headers in n/w access-control-allow-origin is set of a api
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
  })
);

app.use("/api/auth", authRouter);

app.use("/", (req, res) => {
  res.status(200).json({
    data: "JWTAuth Server",
  });
});

module.exports = app;
