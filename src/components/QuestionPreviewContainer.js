import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

class QuestionPreviewContainer extends Component {
  render() {
    const { questions, users } = this.props;

    function getQuestion(id) {
      return questions[id];
    }

    function getAuthor(qId) {
      let question = getQuestion(qId);
      let authorId = question.author;
      return users[authorId];
    }

    return (
      <div>
        QuestionPreviewContainer
        {this.props.questionIds.map((id) => (
          <QuestionPreview question={getQuestion(id)} author={getAuthor(id)} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions, users }) {
  return {
    questionIds: Object.keys(questions),
    questions,
    users,
  };
}

export default connect(mapStateToProps)(QuestionPreviewContainer);
