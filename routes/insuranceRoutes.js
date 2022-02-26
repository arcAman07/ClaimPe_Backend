const express = require("express");

const router = express.Router();

const signUpcontroller = require("../controllers/insuranceController");

// Post Request to store user Details

router.get("/",(req,res,next)=>{
    res.send("Welcome to Medical Insurance API")
    })

router.post("/insurance", insuranceController.postInsurance);

router.get("/insurance", signUpcontroller.getAllInsurance);

router.get("/insurance/:id", signUpcontroller.getInsurance);

router.patch("/insurance/:id", signUpcontroller.patchInsurance);

router.delete("/insurance/:id", signUpcontroller.deleteInsurance);

module.exports = router;