import React, { Component } from "react";
import { Row, Col, Image, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class QuestionPoll extends Component {
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
              <Card.Text> OptionOne</Card.Text>
              or
              <Card.Text> OptionTwo</Card.Text>
              <div className=" d-flex justify-content-end">
                <Button variant="primary">Vote</Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default QuestionPoll;
