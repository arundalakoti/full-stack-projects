exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error("all input fields are required");
    }

    //todo1 - check if user is already registered
    //todo2 - register user to db
  } catch (error) {
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
      throw new Error("all input fields are required");
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
