import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { Container, Row, Col, Navbar, Nav, Link } from 'react-bootstrap'
import QuestionNav from './QuestionNav'
import QuestionPreviewContainer from './QuestionPreviewContainer'
import QuestionNavbar from './QuestionNavbar'
import NoUsersLoggedIn from './NoUsersLoggedIn'
import "holderjs"
import { fakeAuth } from "../utils/helpers";
import Login from './Login'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated === true ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
);

class App extends Component {
    componentDidMount() {
        console.log("App component did mount")
        this.props.dispatch(handleInitialData())
    }
    render() {

        return (
            <Router>

                <Container >
                    <QuestionNavbar />
                    <QuestionNav />
                    <div>
                        {this.props.loading === true
                            ? <NoUsersLoggedIn />
                            : (
                                <div>
                                    <Switch>
                                        <PrivateRoute
                                            path="/"
                                            exact
                                            component={QuestionPreviewContainer} />
                                        <Route
                                            path="/login"
                                            component={props => (
                                                <Login />
                                            )}
                                        />
                                    </Switch>
                                </div>
                            )
                        }
                    </div>
                </Container>

            </Router>
        )

    }
}

function mapStateToProps({ authedUser }) {
    return {
        loading: authedUser === null
    }
}


export default connect(mapStateToProps)(App);
