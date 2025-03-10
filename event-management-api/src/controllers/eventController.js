const Event = require("../models/event");

const createEvent = async (req, res) => {
  try {
    const { title, location, date, category, description } = req.body;

    if (!title || !date || !category || !location || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEvent = await Event.create({
      title,
      date,
      category,
      location,
      description,
      createdBy: req.userId,
    });

    return res
      .status(201)
      .json({ message: "Event created successfully", newEvent });
  } catch {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const { category } = req.query;
    let filter = {};
    if (category) {
      filter.category = category;
    }
    const events = await Event.find(filter)
      .populate("createdBy", "username -_id")
      .sort({ date: 1 });
    return res.status(200).json({ events });
  } catch {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { createEvent, getAllEvents };
