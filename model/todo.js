const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todo", Schema);
