const mongoose = require("mongoose");
const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://nrsonani13:book@cluster0.bm1p4bf.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("connect to mongoose server");
};
module.exports = connect;