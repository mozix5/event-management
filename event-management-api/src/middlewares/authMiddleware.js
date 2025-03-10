const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../constants/secrets");

const authMiddleware = (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, JWT_SECRET_KEY);
      req.userId = user.id;
    } else {
      return res.status(401).json({ message: "No token found." });
    }
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized user." });
  }
};
module.exports = authMiddleware;
