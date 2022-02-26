const express = require("express");

const router = express.Router();

const signUpcontroller = require("../controllers/insuranceController");

// Post Request to store user Details

router.get("/",(req,res,next)=>{
    res.send("Welcome to Medical Insurance API")
    })

router.post("/insurance", insuranceController.postInsurance);

router.get("/insurance", insuranceController.getAllInsurance);

router.get("/insurance/:id", insuranceController.getInsurance);

router.patch("/insurance/:id", insuranceController.patchInsurance);

router.delete("/insurance/:id", insuranceController.deleteInsurance);

module.exports = router;