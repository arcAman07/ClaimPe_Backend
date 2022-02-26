const express = require("express");

const router = express.Router();

const signUpcontroller = require("../controllers/insuranceController");

// Post Request to store user Details

router.post("/signUp", signUpcontroller.postUser);

router.get("/signUp", signUpcontroller.getAllUsers);

module.exports = router;