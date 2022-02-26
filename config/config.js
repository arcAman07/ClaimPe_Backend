const dotenv = require("dotenv");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

module.exports = MONGO_URI;