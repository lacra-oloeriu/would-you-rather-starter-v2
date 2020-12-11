import React, { Component } from "react";
import { Col } from "react-bootstrap";

class OptionResult extends Component {
  render() {
    const { question, author,option } = this.props;
    console.log('OptionResult data ',author, question, option)
    return (
      <Col sm={8}>
        <div> Intrebare</div>
        <div> Grafic</div>
        <div> Text</div>
      </Col>
    );
  }
}

export default OptionResult;
