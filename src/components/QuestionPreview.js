import React, { Component } from "react";
import { Row, Col, Image, Card, Button, Container } from "react-bootstrap";
import { ReactComponent as ReactPlaceholder } from "../images/paceholder.svg";
import styles from "./Question.module.css";
import {Link} from 'react-router-dom';
var placeholder = require("../images/paceholder.svg");


class QuestionPreview extends Component {
  render() {
    const { question, author } = this.props;
    console.log(question);
    return (
      <Card>
        <Card.Header>Would you rather</Card.Header>
        <Card.Body>
          <Row>
            <Col sm={4}>
              <Card.Title> {author.name}</Card.Title>
            </Col>

            <Col sm={8}>
              <Card.Text> {question.optionOne.text}</Card.Text>
              or
              <Card.Text> {question.optionTwo.text}</Card.Text>
              <div className=" d-flex justify-content-end">
                <Link to = {"/question/" + question.id}>
                <Button variant="primary">View</Button>
                </Link>
                
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default QuestionPreview;
