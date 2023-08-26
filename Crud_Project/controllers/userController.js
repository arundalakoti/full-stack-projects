const User = require("../models/userModels");

exports.home = (req, res) => {
  res.send("<h1>Home response</h1>");
};

exports.createUser = async (req, res) => {
  try {
    //data can come from only two places --> url or body(form)

    const { name, email } = req.body;

    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    //check if user is already registered
    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new Error("User already exists");
    }

    const user = await User.create({
      name,
      email,
    });

    res.status(200).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.finc({});
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.editUsers = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteUsers = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
