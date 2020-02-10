const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();
const PORT = config.get("port") || 8000;

app.use(express.json());
app.use("/", require("./routes/chat"));

const start = async () => {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}...`);
    });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
};

start();
