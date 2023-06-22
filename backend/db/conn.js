require("dotenv").config();
const mongoose = require("mongoose");

const connectionString = process.env.MONGO_URL;

mongoose
  .connect(connectionString, {
    dbName: "traya_feedback",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));
