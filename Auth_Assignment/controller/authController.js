const Auth = require("../models/registerModal");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error("Name, email and password are required");
    }

    const userExists = await Auth.findOne({ email });

    if (userExists) {
      throw new Error("User already exists");
    }

    const registeredUser = await Auth.create({
      name,
      email,
      password,
    });

    res.status(200).json({
      success: true,
      message: "User registered successfully",
      registeredUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const userExists = Auth.find({ email });
    const passwordExists = Auth.find({ password });

    console.log(userExists, "userExists");

    if (!userExists) {
      throw new Error("No account associate with this email");
    }

    if (!passwordExists) {
      throw new Error("Password is wrong");
    }

    res.status(200).json({
      success: true,
      message: "User login successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
