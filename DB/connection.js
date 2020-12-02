const mongoose = require("mongoose");

const URI =
  "mongodb+srv://minahil123:minahil123@cluster0.r21ko.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connection Established");
};

module.exports = connectDB;