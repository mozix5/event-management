const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth/authRoutes");
const eventRouter = require("./routes/events/eventRoutes");
const { MONGODB_URI } = require("./constants/secrets");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRouter);
app.use("/api/events", eventRouter);

const PORT = process.env.PORT || 3000;
// console.log(MONGODB_URI);
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
