import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Container, Row, Col, Navbar, Nav, Link } from "react-bootstrap";
import QuestionPreviewContainer from "./QuestionPreviewContainer";
import QuestionNavbar from "./QuestionNavbar";
import "holderjs";
import LoadingComponent from "./LoadingComponent";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { fakeAuth } from "../utils/helpers";
import Login from "./Login";
import CreateQuestion from "./CreateQuestion";
import Leaderboard from "./Leaderboard";
import ViewQuestion from "./ViewQuestion";
import NoMatch from "./NoMatch";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

class App extends Component {
  componentDidMount() {
    console.log("App component did mount");
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Container>
          <QuestionNavbar />
          <div>
            {this.props.loading === true ? (
              <LoadingComponent />
            ) : (
              <div>
                <Switch>
                  <PrivateRoute
                    path="/"
                    exact
                    component={QuestionPreviewContainer}
                  />
                  <Route
                    path="/login"
                    component={(props) => <Login {...props} />}
                  />
                  <PrivateRoute path="/add" exact component={CreateQuestion} />
                  <PrivateRoute
                    path="/leaderboard"
                    exact
                    component={Leaderboard}
                  />
                  <PrivateRoute
                    path="/question/:id"
                    exact
                    component={ViewQuestion}
                  />
                  <PrivateRoute component={ViewQuestion} />
                </Switch>
              </div>
            )}
          </div>
        </Container>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    loading: authedUser === null,
    users: users,
  };
}

export default connect(mapStateToProps)(App);
