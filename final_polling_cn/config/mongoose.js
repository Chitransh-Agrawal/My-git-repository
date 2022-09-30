const mongoose = require("mongoose");
// const env = require("./enviorment");

mongoose.connect(`mongodb+srv://chitransh-agrawal:lLHwm1Bi0dS0oGw2@cluster0.piqqzwo.mongodb.net/?retryWrites=true&w=majority`,
{dbName:'polling_app'});
//(`mongodb://localhost/polling_dev`);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error Connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to DB");
});

module.exports = db;
