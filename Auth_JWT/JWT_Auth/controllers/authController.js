const emailValidator = require("email-validator");
const userModel = require("../models/userSchema");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      res.status(400).json({
        success: false,
        message: "Every field is required",
      });
    }

    const validEmail = emailValidator.validate(email);

    if (!validEmail) {
      res.status(400).json({
        success: false,
        message: "Please provide valid email",
      });
    }

    if (password !== confirmPassword) {
      res.status(400).json({
        success: false,
        message: "Every field is required",
      });
    }

    const userInfo = userModel(req.body);
    const result = userInfo.save();

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    //11000 --> error code if email already exist
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Account already exist",
      });
    }
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const signin = async (req, res) => {
  const { password, email } = req.body;

  if (!password || !email) {
    res.status(400).json({
      success: false,
      message: "Every field is required",
    });
  }

  try {
    const user = await userModel.findOne({ email }).select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    //After successful sign in we need to generate a token which we can pass to ui so that it can be stored in a cookie and can be accessed throughout the website(otherwise we need to eveytime pass the username and password)
    //With this token in backend when passed from frontend we can decrypt the info of the user that we have set in jwtToken in models

    const token = user.jwtToken();
    user.password = undefined; //making sure that we do not pass password in cookie. so setting it to undefined.

    const cookieOptions = {
      maxAge: 24 * 60 * 60 * 1000, //24hrs in millisec
      httpOnly: true, //for security purpose so that no one can access cookie from client side
    };

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getUser = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = userModel.findById(userId);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const logout = (req, res) => {
  try {
    const cookieOptions = {
      expires: new Date(),
      httpOnly: true,
    };
    res.cookie("token", null, cookieOptions);
    res.status(200).json({
      success: true,
      message: "Logged out!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  signup,
  signin,
  getUser,
  logout,
};
