import React, { Component } from "react";
import {
  Row,
  Col,
  Image,
  Card,
  Button,
  Container,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";

class QuestionPoll extends Component {
  gootToGo = false;
  answer = undefined;
  authedUser = this.props.user;
  qid = this.props.question.id;

  setOptionOne() {
    console.log("optionOne");
    this.answer = "optionOne";
    this.gootToGo = true;
  }

  setOptionTwo() {
    console.log("optionTwo");
    this.answer = "optionTwo";
    this.gootToGo = true;
  }

  handleSubmit() {
    const { dispatch } = this.props;
    const { authedUser, qid, answer } = this;
    if (this.gootToGo) {
      dispatch(
        handleAnswerQuestion({
          authedUser:authedUser.id,
          qid,
          answer,
        })
      );
    }
  }

  render() {
    const { question, author, user } = this.props;
    console.log("pool log ", question, author, user);
    return (
      <Card>
        <Card.Header>Would you rather</Card.Header>
        <Card.Body>
          <Row>
            <Col sm={4}>
              <Card.Title> Author name</Card.Title>
            </Col>

            <Col sm={8}>
              <Form.Check
                type="radio"
                label="Option One"
                name="FormName"
                id="FormId"
                onChange={() => this.setOptionOne()}
              />
              or
              <Form.Check
                type="radio"
                label="Option Two"
                name="FormName"
                id="FormId"
                onChange={() => this.setOptionTwo()}
              />
              <div className=" d-flex justify-content-end">
                <Button variant="primary" onClick={() => this.handleSubmit()}>
                  Vote
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

function mapStateToProps({}) {
  return {};
}

export default connect(mapStateToProps)(QuestionPoll);
