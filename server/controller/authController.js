const User = require("../models/user.js");

const test = (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password, conformpassword } = req.body;

    //checking for name
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    //check for password
    if (!password || password.length < 6) {
      return res.json({
        error: "password is required and should be least 6 characters long",
      });
    }
    //check for email

    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "email is taken already",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      conformpassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { test, registerUser };
