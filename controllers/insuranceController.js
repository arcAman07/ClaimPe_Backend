const mongoose = require("mongoose");
const insuranceSchema = require("../models/insurance");
const Insurance = mongoose.model("Insurance", insuranceSchema);
const d = new Date();
let day = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
let date = `${day}/${month}/${year}`;
console.log(day)
exports.postInsurance = (req, res, next) => {
  const newInsurance = new Insurance({
    insuranceType: "Health",
    date: date,
    status: "Ongoing",
    amount: req.body.amount,
  });

  newInsurance.save((err) => {
    if (err) {
      console.log(err);
    } else {
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

exports.patchInsurance = (req, res, next) => {
  Insurance.updateOne({ _id: req.params.id }, { $set: req.body }, (err) => {
    if (!err) {
      res.sendStatus(200)
    } else {
      console.log(err);
    }
  });
};

exports.deleteInsurance = (req, res, next) => {
  Insurance.deleteOne({ _id: req.params.id }, (err) => {
    if (!err) {
        res.sendStatus(200)
    } else {
      console.log(err);
    }
  });
};