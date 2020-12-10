import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import QuestionResults from "./QuestionResults";
import QuestionPoll from "./QuestionPoll";

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
    console.log("Theuser", user);

    const author = getUser(question.author)

    function getAllVotes(question) {
      let allVotes = [];
      allVotes = allVotes.concat(question.optionOne.votes);
      allVotes = allVotes.concat(question.optionTwo.votes);
      return allVotes;
    }
    let allVotes = getAllVotes(question);
    console.log("allVotes", allVotes);

    function userVoted(question, userId) {
      let allVotes = getAllVotes(question);
      return allVotes.includes(userId);
    }

    console.log("user voted", userVoted(question, authedUserId));

    let content;
    if (userVoted(question, authedUserId)) {
      content = <QuestionResults />;
    } else {
      content = <QuestionPoll user={user} question={question} author={author}/>;
    }

    return (
      <div>
        ViewQuestion Component
        {content}
      </div>
    );
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
