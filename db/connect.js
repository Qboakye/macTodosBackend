const mongoose = require("mongoose");

module.exports = async function connect(url) {
  await mongoose.connect(url).then(() => console.log("connected to todo db"));
};
