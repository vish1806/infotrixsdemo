const mongoose = require("mongoose");
const { connect } = require("mongoose");
mongoose.set("strictQuery", false);

const connectDb = async () => {
  return connect(process.env.DB_URI, { dbName: process.env.DB_NAME });
};

module.exports = { connectDb };