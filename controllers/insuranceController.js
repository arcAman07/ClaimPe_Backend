const mongoose = require("mongoose");
const insuranceSchema = require("../models/insurance");
const Insurance = mongoose.model("Insurance", insuranceSchema);

exports.postInsurance = (req, res, next) => {
  const newInsurance = new Insurance({
    insuranceType: req.body.insuranceType,
    date: req.body.date,
    status: req.body.status,
    amount: req.body.amount,
  });

  newInsurance.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully added the new insurance");
      res.sendStatus(200)
    }
  });
};

exports.getInsurance = (req, res, next) => {
  Insurance.findOne({ _id: req.params.id }, (err, insurance) => {
    if (!err) {
      res.send(insurance);
    } else {
      console.log(err);
    }
  });
};

exports.getAllInsurance = (req, res, next) => {
  Insurance.find((err, results) => {
    if (!err) {
      res.send(results);
    } else {
      console.log(err);
    }
  });
};