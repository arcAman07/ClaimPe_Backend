const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const mongoose = require("mongoose");
const { Schema } = mongoose;
// Some changes need to be made in the schema ( make in unique and regex will be applied )
const insuranceSchema = new Schema({
  insuranceType: { type: "string", required: true },
  date: { type: "string", required: true },
  status: { type: "string", required: true },
  amount: { type: "Number", required: true },
});

module.exports = insuranceSchema;