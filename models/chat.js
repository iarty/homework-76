const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  author: { type: String, required: true },
  message: { type: String, required: true },
  datetime: { type: Date, default: Date.now }
});

module.exports = model("News", schema);
