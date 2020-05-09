import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Question = props => (
  <tr>
    <td>{props.question.author_name}</td>
    <td>{props.question.question_title}</td>
    <td>{props.question.question_input}</td>
    <td>
      <Link to={"/Question&Answers/" + props.question._id}>Answer</Link>
    </td>
  </tr>
);

class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/questions/")
      .then(response => {
        this.setState({ questions: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  questionList() {
    return this.state.questions.map(function(currentQuestion, i) {
      return <Question question={currentQuestion} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Question List</h3>
        <table className="table table-hover" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Question</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.questionList()}</tbody>
        </table>
      </div>
    );
  }
}
export default QuestionList;
