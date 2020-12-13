import React, { Component } from "react";
import { Row, Col, Image, Card, Table, Badge } from "react-bootstrap";

class LeaderItem extends Component {
  render() {
    const { user, pointObject } = this.props;
    return (
      <Card>
        <Card.Header>{user.name}</Card.Header>
        <Card.Body>
          <Row>
            <Col sm={4}>
              <Image src={user.avatarURL} roundedCircle height="100px" />
            </Col>

            <Col sm={5}>
              <Table hover size="sm">
                <tbody>
                  <tr>
                    <td>Answerd question</td>
                    <td>{pointObject.answerd}</td>
                  </tr>

                  <tr>
                    <td>Created questions</td>
                    <td>{pointObject.created}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            <Col sm={3}>
              <Card.Title>Score</Card.Title>
              <Card.Title>
                <Badge variant="secondary">{pointObject.points}</Badge>
              </Card.Title>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default LeaderItem;
