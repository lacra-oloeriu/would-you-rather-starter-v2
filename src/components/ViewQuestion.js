import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ViewQuestion extends Component {
  render() {
    const { questions, users, authedUserId } = this.props;
    console.log("authedUserId", authedUserId);
    console.log("questions", questions);
    console.log("users", users);
    console.log("questionId", this.props.match.params.id);

    function getQuestion(questionId) {
      return questions[questionId];
    }

    const question = getQuestion(this.props.match.params.id);
    console.log("theQuestion", question);

    function getUser(userId) {
      return users[userId];
    }

    const user = getUser(authedUserId);
    console.log("user", user);

    return <div>ViewQuestion Component</div>;
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    users,
    authedUserId: authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(ViewQuestion));
