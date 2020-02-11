const { Router } = require("express");
const router = Router();
const ChatModel = require("../models/chat");

router.get("/messages", async (req, res) => {
  try {
    let messages = [];
    if (req.query.datetime) {
      const date = new Date(req.query.datetime);
      if (isNaN(date.getDate())) {
        return res.status(400).json({ message: "Wrong date" });
      }
      messages = await ChatModel.find({
        datetime: { $gt: req.query.datetime }
      }).sort({ datetime: -1 });
    } else {
      messages = await ChatModel.find()
        .limit(30)
        .sort({ datetime: -1 });
    }

    return res.status(200).json(messages.reverse());
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.post("/messages", async (req, res) => {
  if (!req.body.author || !req.body.message) {
    return res
      .status(422)
      .json({ message: "Author and message must be present in the request" });
  }

  try {
    const newMessage = new ChatModel({
      author: req.body.author,
      message: req.body.message,
      datetime: new Date().toISOString()
    });
    await newMessage.save();
    return res.status(201).json({ newMessage });
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong, try again" });
  }
});

module.exports = router;
