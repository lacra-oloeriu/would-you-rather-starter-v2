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
import { handleAddQuestion } from "../actions/questions";
import { Redirect, withRouter } from "react-router-dom";

class CreateQuestion extends Component {
  render() {
    let optionOne;
    let optionTwo;

    console.log("create questions", this.props.questions);
    console.log("create authedUserId ", this.props.authedUserId);
    const { dispatch, history } = this.props;

    function handleOptionOneChange(e) {
      optionOne = e.target.value;
    }

    function handleOptionTwoChange(e) {
      optionTwo = e.target.value;
    }

    function submitQuestion() {
      if (optionOne && optionTwo) {
        console.log("time to dispach create question", optionOne, optionTwo);
        dispatch(handleAddQuestion(optionOne, optionTwo));
        history.push("/");
      } else {
        console.log("Data is missing)");
      }
    }
    return (
      <Form>
        <Card>
          <Card.Header>Create a new question:</Card.Header>
          <Card.Body>
            <Row>
              <Col sm={4}>
                <Card.Title> Would you rather</Card.Title>
              </Col>

              <Col sm={8}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Option one"
                    onChange={handleOptionOneChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Option two"
                    onChange={handleOptionTwoChange}
                  />
                </Form.Group>

                <div className=" d-flex justify-content-end">
                  <Button variant="primary" onClick={() => submitQuestion()}>
                    Submit
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Form>
    );
  }
}

function mapStateToPromps({ questions, authedUser }) {
  return {
    questions,
    authedUserId: authedUser,
  };
}

export default withRouter(connect(mapStateToPromps)(CreateQuestion));
