const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: String,
  message: {
    type: String,
    required: true,
  },
  date: String,
});

const model = mongoose.model("Message", mySchema);
module.exports = model;
