import React ,{ Component } from 'react'
import { Container, Row, Col, Navbar, Nav,Link } from 'react-bootstrap'


class QuestionNav extends Component {
    render() {
        return (
            < Nav className = "justify-content-center">
              <Nav.Item>
                <Nav.Link> Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link eventKey ="Link-1"> Link</Nav.Link>
              </ Nav.Item>
            </Nav>
    )
  }
}
                       
export default QuestionNav 