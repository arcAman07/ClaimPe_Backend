require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const insuranceRoutes = require("./routes/insuranceRoutes");
const payementRoutes = require("./routes/payementRoutes");
const MONGO_URI = require("./config/config");
const uri = MONGO_URI;
mongoose.connect(uri, {
  })
  .then(() =>
    console.log("Database is connected!"))

  .catch((err) => console.error(err))

app.use(insuranceRoutes);
app.use(payementRoutes);
app.listen(PORT, () => console.log("The server is running"));