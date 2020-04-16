const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CommentScheme = new Schema({
  author: {
    type: String
  },
  text: {
    type: String
  },
  rating: {
    type: Number
  },
  answersToQuestion:{
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"question"
  }
});
module.exports = mongoose.model("comment", CommentScheme);
