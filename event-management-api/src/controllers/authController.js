const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { JWT_SECRET_KEY, JWT_EXPIRY_DELTA } = require("../constants/secrets");

const register = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const existingUser = await User.exists({ email });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await User.create({
        email,
        password: hashedPassword,
        username,
      });

      const token = jwt.sign(
        {
          email: email,
          _id: result._id,
        },
        JWT_SECRET_KEY,
      );
      res.status(201).json({ user: result, token: token });
    }
  } catch {
    res.status(500).json({ message: "Something went wrong." });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email: email });

  if (!existingUser) {
    res.status(404).json({ message: "User doesnt exists" });
  }
  const matchPassword = await bcrypt.compare(password, existingUser.password);
  if (!matchPassword) {
    res.status(400).json({ message: "Invalid password" });
  }
  const token = jwt.sign(
    { email: existingUser.email, id: existingUser._id },
    JWT_SECRET_KEY,
    { expiresIn: JWT_EXPIRY_DELTA },
  );
  res.status(200).json({ user: existingUser, token: token });
};
module.exports = { register, login };
