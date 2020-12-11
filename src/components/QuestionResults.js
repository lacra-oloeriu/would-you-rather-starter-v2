import React, { Component } from "react";
import { Row, Col, Card,Image} from "react-bootstrap";
import OptionResult from './OptionResult';

class QuestionResults extends Component {
  render() {
    const { question, author } = this.props;
    console.log('QuestionResults data ',author)
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
              <OptionResult question ={question} author={author} option ='optionOne'/>
              ********
              <OptionResult question ={question} author={author} option ='optionTwo'/>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
export default QuestionResults;
