const mongoose = require("mongoose");

//connect to the database
mongoose.connect("mongodb://localhost/toDo_List");

//accquire the connection (to check if it is successful)
const db = mongoose.connection;

//error
db.on("error", console.error.bind(console, "error  connecting to mongodb"));

//up and running then print the message
db.once("open", function () {
  console.log("connected to Database :: MongoDB");
});

module.exports = db;
