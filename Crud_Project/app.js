require("dotenv").config(); //for accessing constants from .env, we can add an object inside config for its configuration
const express = require("express");
const connectToDb = require("./config/db");
const cors = require("cors");

const app = express();
connectToDb();

// below two lines are required to inform express to accept json and url encoded data.
app.use(express.json()); // if i dont use this then while accessing req.body i will get error as data is send in crypted from so we need to convert it to json first
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const userRoutes = require("./routes/userRoutes");

app.use("/", userRoutes); //all the routes from userRoutes will be used here we don't need to add it twice.

module.exports = app;
