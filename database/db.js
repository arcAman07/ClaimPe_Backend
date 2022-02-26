const MONGO_URI = require("./config/config");
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("insuranceDB").collection("insurances");
  // perform actions on the collection object
  client.close();
});
