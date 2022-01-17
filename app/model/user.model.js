const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  login: String,
  password: String,
  age: Number


});

module.exports = mongoose.model("Users", UserSchema);