const mongoose = require("mongoose");
const payementSchema = require("../models/payement");
const Payement = mongoose.model("Payement", payementSchema);
transaction = []
exports.postPayement = (req, res, next) => {

  const payement = {
    receiver: req.body.receiver,
    sender: req.body.sender,
    amount: req.body.amount,
  }
  transaction.push(payement)
  const newPayement = new Payement({
    transactions: transaction,
        });
  newPayement.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully added the new payement");
      res.sendStatus(200)
    }
  });
};
exports.getAllPayement = (req, res, next) => {
  Payement.find((err, results) => {
    if (!err) {
      res.send(results);
    } else {
      console.log(err);
    }
  });
};