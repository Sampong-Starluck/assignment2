const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

//render ejs
router.get("/login", authController.signIn);



module.exports = router;