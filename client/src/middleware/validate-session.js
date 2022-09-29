const jwt = require("jsonwebtoken");
// const User = require("../models/user.model");

const validateSession = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const decodedToken = await jwt.verify(token, process.env.JWT);
    const user = await User.findById(decodedToken.id);

    if (user) {
      req.user = user;
      return next();
    } else {
      throw Error("User not found");
    }
  } catch (error) {
    res.status(503).json({ error: error.message });
  }
};
module.exports = validateSession;
