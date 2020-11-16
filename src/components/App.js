import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { Container, Row, Col, Navbar, Nav,Link } from 'react-bootstrap'
import QuestionNav from './QuestionNav'
import QuestionPreviewContainer from './QuestionPreviewContainer'
import QuestionNavbar from './QuestionNavbar'

class App extends Component {
    componentDidMount() {
        console.log("App component did mount")
        this.props.dispatch(handleInitialData())
    }
    render() {

        return (
            <Container >
             <QuestionNavbar/> 
              <QuestionNav/>
            <div>
                {this.props.loading === true
          ? null
          : <QuestionPreviewContainer />
                }
            </div>
            </Container>
        )

    }
}

function mapStateToProps({ authedUser }) {
    return {
      loading: authedUser === null
    }
  }
  

export default connect(mapStateToProps)(App);
