import React, { Component } from "react";
import { Row, Col,Card } from "react-bootstrap";

class NoMatch extends Component {
  render() {
    return (
      <Card>
        <Card.Header>Would you rather</Card.Header>
        <Card.Body>
          <Row>
            <Col sm={4}>
              <Card.Title> Ups : 404 </Card.Title>
            </Col>

            <Col sm={8}>
              <Card.Text>
                {" "}
                This is not de question you are looking for{" "}
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
export default NoMatch;
