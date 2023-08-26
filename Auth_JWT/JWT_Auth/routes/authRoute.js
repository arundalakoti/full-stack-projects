const express = require("express");
const {
  signup,
  signin,
  getUser,
  logout,
} = require("../controllers/authController");
const jwtAuth = require("../middleware/jwtAuth");

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("signin", signin);
authRouter.get("/user", jwtAuth, getUser); //in order to get user details first we execute the middleware jwtAuth which will do 2 things-->
//1)- verify token 2)- inject user info in req

authRouter.get("/logout", jwtAuth, logout);

module.exports = authRouter;
