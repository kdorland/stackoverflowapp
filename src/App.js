import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PostQuestion from "./components/post-questions";
import QuestionList from "./components/Questions";
import QuestionLink from "./components/Question-Answers";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/post" className="nav-link">
                    Post questions
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/Questions" className="nav-link">
                    Questions List
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Switch>
            <Route path="/post/" component={PostQuestion} />
            <Route path="/Questions/" component={QuestionList} />
            <Route
              path="/Question&Answers/:id"
              render={props => <QuestionLink {...props} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
