const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.use(cookieParser());

app.all("*", (req, res) => {
  res.status(404).send("OOPS!! 404 page not found");
});

module.exports = app;
