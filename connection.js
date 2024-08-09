const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/voting-app")
  .then(() => console.log("MongoDb connected"))
  .catch((error) => console.log("MongoDb error", error));

const db = mongoose.connection;

module.exports = db;
