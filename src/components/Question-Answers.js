import React, { Component } from "react";
import axios from "axios";
import { Rating } from "semantic-ui-react";

const Answers = props => (
  <tr>
    <td>{props.answers.author}</td>
    <td>{props.answers.text}</td>
    <td>{props.answers.rating}</td>
  </tr>
);

class QuestionLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: {},
      answers: [],
      author: "",
      text: "",
      rating: 0,
      answersToQuestion: ""
    };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }
  handleRating(e) {
    this.setState({ rating: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newAnswers = {
      author: this.state.author,
      text: this.state.text,
      answersToQuestion: this.props.match.params.id
    };

    axios
      .post("http://localhost:4000/answers/addAnswers/", newAnswers)
      .then(res => console.log(res.data));

    this.setState({
      author: "",
      text: "",
      answersToQuestion: this.props.match.params.id
    });
  }

  componentDidMount() {
    this.setState({
      answersToQuestion: this.props.match.params.id
    });
    axios.get("http://localhost:4000/questions/").then(response => {
      this.setState({
        currentQuestion: response.data.find(
          elm => elm._id === this.props.match.params.id
        )
      });
    });

    axios
      .get("http://localhost:4000/answers/")
      .then(response => {
        this.setState({ answers: response.data });
      })

      .catch(function(error) {
        console.log(error);
      });
  }

  AnswersList() {
    return this.state.answers
      .filter(e => e.answersToQuestion === this.props.match.params.id)
      .map(function(currentAnswers, i) {
        return <Answers answers={currentAnswers} key={i} />;
      });
  }
  ratingbtn() {
    return (
      <div className="Rating">
        <input
          type="range"
          min={0}
          max={5}
          value={this.state.rating}
          onChange={this.handleRating}
        />
        <br />
        <Rating rating={this.state.rating} maxRating={5} />
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12">
            {this.ratingbtn()}
            <h1 className="display-3">
              {this.state.currentQuestion.author_name}
            </h1>
            <p className="lead">{this.state.currentQuestion.question_input}</p>
            <hr className="my-4" />
            <div className="form-group">
              <label>Name: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.author}
                onChange={this.handleAuthorChange}
              />
            </div>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Comment: </label>
                <textarea
                  text="textarea"
                  className="form-control"
                  value={this.state.text}
                  onChange={this.handleTextChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Submit Answer"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <h3>Answers</h3>
            <table className="table table-hover" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Answer</th>
                  <th>Rate{this.ratingbtn()}</th>
                </tr>
              </thead>
              <tbody>{this.AnswersList()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionLink;
