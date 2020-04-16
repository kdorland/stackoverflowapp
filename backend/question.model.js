/* With this code in place we’re now ready to access the MongoDB 
database by using the question schema. */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let question = new Schema({
  author_name: {
    type: String
  },
  question_title: {
    type: String
  },
  question_input: {
    type: String
  },
  answers: [
    {
      type: Schema.ObjectId,
      ref: "comment"
    }
  ],
  created_date: {
    type: Date,
    default: Date.now
  }

  // question_completed: {
  //     type: Boolean
  // }
});

module.exports = mongoose.model("question", question);
