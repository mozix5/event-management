const express = require("express");
const {
  createEvent,
  getAllEvents,
} = require("../../controllers/eventController");
const authMiddleware = require("../../middlewares/authMiddleware");
const eventRouter = express.Router();

eventRouter.post("/create-event", authMiddleware, createEvent);
eventRouter.get("/", authMiddleware, getAllEvents);

module.exports = eventRouter;
