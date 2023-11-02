require("dotenv").config();
const express = require("express");
const app = require("./server");
const cors = require("cors");
const connectToDb = require("./config/db");

const userRoutes = require("./routes/userRoutes.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectToDb();

app.use("/", userRoutes);
