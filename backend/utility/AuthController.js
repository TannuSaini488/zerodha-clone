const bcrypt = require("bcrypt");
const users = require("../model/UserModel.js");
const { createSecretToken } = require("./SecretToken.js");

module.exports.SignUp = async (req, res, next) => {
  try {
    const { email, password, username, createAt } = req.body;
    //console.log(`${email}--------${password}`);

    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(202).json({ message: "User already exists" });
    } else {
      const user = await users.create({ email, password, username, createAt });
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: true,
        secure: true,
      });
      return res
        .status(201)
        .json({ message: "User signed in successfully", success: true, user });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports.LogIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ email });
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    if (!user) {
      return res.status(202).json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      secure: true
    });
    return res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error(error);
  }
};
