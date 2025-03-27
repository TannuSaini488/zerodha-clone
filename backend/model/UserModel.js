const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//sespection
UsersSchema.pre("save", async function () {
  console.log(this.password);
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("users", UsersSchema);
