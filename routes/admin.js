const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

//render ejs
router.get("/login", authController.signIn);
// router.get("/signup", authController.signUp);

// register new user
router.post('/login', authController.signUp);



module.exports = router;
