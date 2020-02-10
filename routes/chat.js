const { Router } = require("express");
const router = Router();
const ChatModel = require("../models/chat");

router.get("/messages", async (req, res) => {
  try {
    let messages = [];
    if (req.query.datetime) {
      const date = new Date(req.query.datetime);
      if (isNaN(date.getDate())) {
        return res.status(400).json("Wrong date");
      }
      messages = await ChatModel.find({
        datetime: { $gt: req.query.datetime }
      }).limit(-30);
    } else {
      messages = await ChatModel.find().limit(-30);
    }
    res.json(messages);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.post("/messages", async (req, res) => {
  if (!req.body.author || !req.body.message) {
    return res
      .status(400)
      .json("Author and message must be present in the request");
  }

  try {
    const newMessage = new ChatModel({
      author: req.body.author,
      message: req.body.message,
      datetime: req.body.datetime
    });
    await newMessage.save();
    res.status(201).json({ newMessage });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

module.exports = router;
