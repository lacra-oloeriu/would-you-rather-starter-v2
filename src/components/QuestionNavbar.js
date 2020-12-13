import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Navbar, Nav, NavItem } from "react-bootstrap";

class QuestionNavbar extends Component {
  render() {
    const { authedUser, users } = this.props;

    let logInSwitsh = "login";
    let user = users[authedUser];
    if (user) {
      logInSwitsh = user.name;
    }

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
            <Nav.Link href="/login">{logInSwitsh}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
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
