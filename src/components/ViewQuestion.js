import React, { Component } from "react";
import { connect } from "react-redux";

class ViewQuestion extends Component {
  render() {
    const { questions, users, authedUserId } = this.props;
    console.log("authedUserId", authedUserId);
    console.log("questions", questions);
    console.log("users", users);
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

export default connect(mapStateToProps)(ViewQuestion);
