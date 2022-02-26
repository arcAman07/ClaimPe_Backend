const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const mongoose = require("mongoose");
const { Schema } = mongoose;
// Update date schema
const payementSchema = new Schema({
    transactions:[
        {
        receiver: { type: "string", required: true },
  sender: { type: "string", required: true },
  amount: { type: "Number", required: true },
        }]
});

module.exports = payementSchema;