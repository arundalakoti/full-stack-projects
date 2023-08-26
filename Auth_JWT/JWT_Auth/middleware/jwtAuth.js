const JWT = require("jsonwebtoken");

const jwtAuth = (req, res, next) => {
  // 1)- verify token
  // 2)- inject user info in req

  //we will not be able to extract the token directly as we were not able to access req.body before so for this we will use cookie-parser
  // we just need to import and call cookie-parser in app.js
  const token = (req.cookies && req.cookies.token) || null;

  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Not authorized",
    });
  }

  try {
    const payload = JWT.verify(token, process.env.SECRET);
    req.user = { id: payload.id, email: payload.email }; //now in getUser func we can get the id of the user
  } catch (error) {
    return re.status(400).json({
      success: false,
      message: error.message,
    });
  }
  next(); //mandatory to call otherwise it will be stuck in middleware. so it tells to execute the code in middleware and move to next step
};

module.exports = jwtAuth;
