import React, { Component } from "react";
import { Row, Col, Image, Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';



class QuestionPreview extends Component {
  render() {
    const { question, author } = this.props;
    return (
      <Card>
        <Card.Header>Would you rather</Card.Header>
        <Card.Body>
          <Row>
            <Col sm={4}>
              <Card.Title> {author.name}</Card.Title>
              <Image src ={author.avatarURL}
              roundedCircle height ='100px'/>
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
