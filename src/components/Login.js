import React, { Component} from 'react'
import{connect} from 'react-redux'

class Login extends Component {

    constructor(props) {
        super(props)
    }
     handleLogin(user) {
         console.log(user)
     }
    render() {
        console.log(this.props.users)
        return(
            <div>
                Pick a user!
            </div>
        )
    }
}
function mapStateToProps({ users }) {
    return {
      users: Object.keys(users)
    }
  }
  
  export default connect(mapStateToProps)(Login)

