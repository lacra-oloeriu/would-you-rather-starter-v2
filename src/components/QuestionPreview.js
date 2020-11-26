import React, { Component } from 'react'
import { Row, Col, Image, Card, Button, Container } from 'react-bootstrap'

import { ReactComponent as ReactPlaceholder } from '../images/paceholder.svg'


class QuestionPreview extends Component {

  render() {
    return (
      <Container>
        <Row>
          Name and Sirname askes:
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            {/* <Image src="images/paceholder.svg" /> */}
            <ReactPlaceholder />
          </Col>
          <Col>
            The content of the big column
          </Col>
        </Row>
      </Container>
    )
  }
}


export default QuestionPreview

