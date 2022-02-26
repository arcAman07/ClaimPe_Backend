const mongoose = require("mongoose");
const payementSchema = require("../models/payement");
const Payement = mongoose.model("Payement", payementSchema);
exports.postPayement = (req, res, next) => {
  const newPayement = new Payement({
    transactions: [
        {
        receiver: req.body.receiver,
        sender: req.body.sender,
        amount: req.body.amount,
        }
    ],
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