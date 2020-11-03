import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
    componentDidMount() {
        console.log("App component did mount")
        this.props.dispatch(handleInitialData())
    }
    render() {

        return (
            <div>
                Start Code
            </div>
        )

    }
}

export default connect()(App);
