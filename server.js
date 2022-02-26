require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const insuranceRoutes = require("./routes/insuranceRoutes");
const MONGO_URI = require("./config/config");
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  // const collection = client.db("insuranceDB").collection("insurances");
  // perform actions on the collection object
  client.close();
});

app.use(insuranceRoutes);
app.listen(PORT, () => console.log("The server is running"));