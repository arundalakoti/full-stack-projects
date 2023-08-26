require("dotenv").config();
const express = require("express");
const connectToDb = require("./config/db");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", authRoutes);

module.exports = app;
