const mongoose = require("mongoose");

//Schema for how the Data will Storen in Database
const listSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },

  work: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
});

const List = mongoose.model("List", listSchema);
module.exports = List;
