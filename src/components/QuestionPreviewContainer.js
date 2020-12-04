import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

class QuestionPreviewContainer extends Component {
  render() {
    const { questions } = this.props;
    function getQuestion(id) {
      return questions[id];
    }
    return (
      <div>
        QuestionPreviewContainer
        {this.props.questionIds.map((id) => (
          <QuestionPreview question={getQuestion(id)} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions),
    questions,
  };
}

export default connect(mapStateToProps)(QuestionPreviewContainer);
