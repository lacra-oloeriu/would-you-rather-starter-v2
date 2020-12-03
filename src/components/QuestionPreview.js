import React, { Component } from 'react'
import { Row, Col, Image, Card, Button, Container } from 'react-bootstrap'
import { ReactComponent as ReactPlaceholder } from '../images/paceholder.svg'
import styles from "./Question.module.css"
var placeholder = require("../images/paceholder.svg");


class QuestionPreview extends Component {
  
  render() {
    const {question} = this.props
    console.log(question)
    return (
      <Card>
        <Card.Header>Would you rather</Card.Header>
        <Card.Body>
          <Row>
            <Col sm={4}><Card.Title> Author name</Card.Title></Col>


            <Col sm={8}> <Card.Text>

              Do you like sports of!
                </Card.Text>
              <Card.Text>
                Do you like to eat!
                  </Card.Text>
              <div className=" d-flex justify-content-end">
                <Button variant="primary">Submit</Button>
              </div>
            </Col>


          </Row>

        </Card.Body>
      </Card>

    );
  }
}


export default QuestionPreview

