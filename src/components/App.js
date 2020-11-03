import React, { Component} from 'react'
import { connect} from 'react-redux'
import { handleInitialData} from '../actions/shared'

class App extends Component {
    componentDiMount(){
        this.props.dispatch(handleInitialData() )
    }
    render () {
        return(
            <div>
            Start Code
            </div>
        )
        
    }
}

export default connect(
     //{handleInitialData} 
  )(App);
  