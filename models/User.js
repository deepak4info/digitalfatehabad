const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  // Other user fields as needed
});

module.exports = mongoose.model("User", userSchema);
