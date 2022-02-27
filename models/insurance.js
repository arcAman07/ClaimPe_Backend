const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const mongoose = require("mongoose");
const { Schema } = mongoose;
// Update date schema
const insuranceSchema = new Schema({
  insuranceType: { type: "string"},
  date: { type: "string"},
  status: { type: "string"},
  amount: { type: "Number", required: true },
  receiver: { type: "string", required: true },
  sender: { type: "string", required: true },
});

module.exports = insuranceSchema;