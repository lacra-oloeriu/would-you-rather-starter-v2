import React, { Component } from "react";
import { Col, ProgressBar } from "react-bootstrap";

class OptionResult extends Component {
  render() {
    const { question, option ,author} = this.props;

    const countAll =
      question.optionOne.votes.length + question.optionTwo.votes.length;

    const thisVotes = question[option].votes.length;

    const percent = (thisVotes * 100) / countAll;

    const yourVote = () => {
      if ( question[option].votes.includes(author.id)){
        return'Your Vote';
      }
    }

    const progressInstance = (
      <ProgressBar now={percent} label={`${percent} %`} />
    );
    return (
      <Col sm={8}>
        <div> {question[option].text}</div>
        <div> {progressInstance}</div>
        <div> {yourVote()}</div>
      </Col>
    );
  }
}

export default OptionResult;
