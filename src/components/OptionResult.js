import React, { Component } from "react";
import { Col, ProgressBar } from "react-bootstrap";

class OptionResult extends Component {
  render() {
    const { question, author, option } = this.props;
    console.log("OptionResult data ", question);

    const countAll =
      question.optionOne.votes.length + question.optionTwo.votes.length;

    const thisVotes = question[option].votes.length;

    const percent = (thisVotes * 100) / countAll;

    console.log("option value", countAll, thisVotes, percent);
    const progressInstance = (
      <ProgressBar now={percent} label={`${percent} %`} />
    );
    return (
      <Col sm={8}>
        <div> {question[option].text}</div>
        <div> {progressInstance}</div>
      </Col>
    );
  }
}

export default OptionResult;
