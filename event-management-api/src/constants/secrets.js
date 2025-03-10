require("dotenv").config();
module.exports = {
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_EXPIRY_DELTA: process.env.JWT_EXPIRY_DELTA,
};
