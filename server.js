require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json())

const insuranceRoutes = require("./routes/insuranceRoutes");

// Testing it on local database on Robo-3T

mongoose.connect("mongodb://localhost:27017/visionDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(insuranceRoutes);

app.listen(PORT, () => console.log("The server is running"));