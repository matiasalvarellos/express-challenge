const express = require("express");
const router = express.Router();
const loginController = require("../controllers/userControllers");
const mainController = require("../controllers/mainControllers");

router.get("/", mainController.home);
router.get("/login", loginController.login);

module.exports = router