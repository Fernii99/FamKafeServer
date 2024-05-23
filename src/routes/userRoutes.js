const express = require("express");
const router = express.Router();


const userController = require("../controllers/UsersController")

router.post("/login", userController.LoginUser);

module.exports = router;