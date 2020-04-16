/* We’re creating an Express server, attaching the cors and body-parser middleware and 
making the server listening on port 4000. With the MongoDB database server running we’re now ready to
 connect to MongoDB from our server program by using the Mongoose library*/
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const questionRoutes = express.Router();
const answerRoutes = express.Router(); /*we create an instance of the Express Router by adding this code*/
const PORT = 4000;

let Qs = require("./question.model");
let answer = require("./answer.model");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("db", {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

/*The function which is passed into the call of the method get is used to handle incoming 
HTTP GET request on the /questions/ URL path. In this case we’re calling Qs.find to retrieve a 
list of all questions items from the MongoDB database. Again the call of the find methods takes
one argument: a callback function which is executed once the result is available. Here we’re making 
sure that the results (available in questions) are added in JSON format to the response body by calling 
res.json(questions).*/
questionRoutes.route("/").get(function(req, res) {
  Qs.find(function(err, questions) {
    if (err) {
      console.log(err);
    } else {
      res.json(questions);
    }
  });
});

answerRoutes.route("/").get(function(req, res) {
  answer.find(function(err, answers) {
    if (err) {
      console.log(err);
    } else {
      res.json(answers);
    }
  });
});

questionRoutes.route("/questions/:id/answers/").get(function(req, res) {
  let id = req.params.id;
  Qs.findById(id, function(err, question) {
    if (err) {
      console.log(err);
    } else {
      res.json(question);
    }
  });
});

/*Here we’re accepting the URL parameter id which can be accessed via req.params.id.
This id is passed into the call of Qs.findById to retrieve an issue item based on it’s ID.
 Once the question object is available it is attached to the HTTP response in JSON format*/
questionRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  Qs.findById(id, function(err, question) {
    res.json(question);
  });
});

answerRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  answer.findById(id, function(err, answers) {
    res.json(answers);
  });
});

/*The new question item is part the the HTTP POST request body, so that we’re able to
 access it view req.body and therewith create a new instance of Question. This new item
 is then saved to the database by calling the save method. */
questionRoutes.route("/add").post(function(req, res) {
  let question = new Qs(req.body);
  question
    .save()
    .then(question => {
      res.status(200).json({ question: "question added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new question failed");
    });
});

answerRoutes.route("/addAnswers").post(function(req, res) {
  let answers = new answer(req.body);
  answers
    .save()
    .then(answers => {
      res.status(200).json({ answers: "Answers added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new answers failed");
    });
});

app.use("/questions", questionRoutes);

app.use("/answers", answerRoutes);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
