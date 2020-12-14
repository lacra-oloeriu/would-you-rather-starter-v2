import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fakeAuth } from "../utils/helpers";

import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Modal } from "react-bootstrap";

class QuestionNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  render() {
    const { authedUser, users } = this.props;

    let logInSwitsh = "login";
    let user = users[authedUser];
    if (user) {
      logInSwitsh = user.name;
    }

    const processLoginAction = () => {
      if (fakeAuth.isAuthenticated) {
        console.log("Processing action", this.state.showModal);
        this.setState({ showModal: true });
      }
    };

    const hideModal = () => {
      this.setState({ showModal: false });
    };

    return (
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">Would you rather</Link>
        </Navbar.Brand>

        <Nav className="mr-auto">
          <NavItem>
            <Link to="/add">New Question</Link>
          </NavItem>
          <NavItem>-</NavItem>
          <NavItem>
            <Link to="/leaderboard">Leaderboard</Link>
          </NavItem>
        </Nav>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <NavItem style={{ color: "white" }} onClick={processLoginAction}>
              --- ---
            </NavItem>
          </Nav>
        </Navbar.Collapse>

        <Modal show={this.state.showModal} onHide={hideModal}>
          <Modal.Body>Would you like to logout?</Modal.Body>
        </Modal>
      </Navbar>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    questionIds: Object.keys(questions),
    authedUserObject: users[authedUser],
    users: users,
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(QuestionNavbar));
