import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Image, Card, Table,Badge } from "react-bootstrap";

class LeaderItem extends Component {
  render() {
    const { questions, users } = this.props;
    console.log(questions, users);
    return (
      <Card>
        <Card.Header>author name</Card.Header>
        <Card.Body>
          <Row>
            <Col sm={4}>
              <Image roundedCircle height="100px" />
            </Col>

            <Col sm={5}>
              <Table hover size="sm">
                <tbody>
                  <tr>
                    <td>Answerd Questions</td>
                    <td>5000</td>
                  </tr>

                  <tr>
                    <td>Created Questions</td>
                    <td>6000</td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            <Col sm={3}>
              <Card.Title>Score</Card.Title>
              <Card.Title>
                  <Badge variant ='secondary'>
                    800
                  </Badge>

              </Card.Title>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

function mapSateToProps({ questions, users }) {
  return {
    questions,
    users,
  };
}

export default connect(mapSateToProps)(LeaderItem);
