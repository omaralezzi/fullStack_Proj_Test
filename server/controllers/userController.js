const User = require("../models/User.js");

exports.createuser = async (req, res, next) => {
  //our code here
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ message: user });
  } catch (error) {
    next(error);
  }
};

exports.getUser = async (req, res, next) => {
  //our code here
  try {
    const users = await User.find();
    res.status(200).json({ details: users });
  } catch (error) {
    next(error);
  }
};
