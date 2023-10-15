const mongoose = require("mongoose");
require("dotenv").config();

async function connect(){
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Unable to connect to MongoDB", error);
  }
};

module.exports = connect;
