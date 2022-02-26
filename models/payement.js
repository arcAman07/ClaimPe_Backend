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
  transactions:[],
});

module.exports = payementSchema;