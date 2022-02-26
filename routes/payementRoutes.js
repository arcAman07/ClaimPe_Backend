const express = require("express");

const router = express.Router();

const payementController = require("../controllers/payementController");

// Post Request to store user Details

router.get("/payement", payementController.getAllPayement);

router.post("/payement", payementController.postPayement);


module.exports = router;