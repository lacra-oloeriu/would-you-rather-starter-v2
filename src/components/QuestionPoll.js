import React, { Component } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";

class QuestionPoll extends Component {
  gootToGo = false;
  answer = undefined;
  authedUser = this.props.user;
  qid = this.props.question.id;

  setOptionOne() {
    this.answer = "optionOne";
    this.gootToGo = true;
  }

  setOptionTwo() {
    this.answer = "optionTwo";
    this.gootToGo = true;
  }

  handleSubmit() {
    const { dispatch } = this.props;
    const { authedUser, qid, answer } = this;
    if (this.gootToGo) {
      dispatch(
        handleAnswerQuestion({
          authedUser: authedUser.id,
          qid,
          answer,
        })
      );
    }
  }

  render() {
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

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(QuestionPoll);
