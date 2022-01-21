const express = require("express");
const router = express.Router();
const { getUser, createuser } = require("../controllers/userController.js");

//http://localhost:5000/user/
router.route("/").get(getUser);

//http://localhost:5000/user/create-user
router.route("/create-user").post(createuser);

module.exports = router;
