const express = require("express");
const router = express.Router();


const userController = require("../controllers/UsersController")

router.post("/new", userController.addNewUser);

module.exports = router;