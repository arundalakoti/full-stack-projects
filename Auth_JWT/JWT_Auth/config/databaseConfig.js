const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
      console.log(`Connected to ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = connectToDb;
