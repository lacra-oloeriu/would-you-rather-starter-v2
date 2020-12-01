import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import {fakeAuth} from '../utils/helpers'

class Login extends Component {

    constructor(props) {
        super(props)
    }
    handleLogin(user) {
        console.log(user)
        fakeAuth.authentificate()
        this.props.dispatch(setAuthedUser(user))
    }
   
    render() {
        const usersItem = this.props.users.map((user) => (
            <li key={user} onClick={() => { this.handleLogin(user) }}>
                {user}
            </li>
        ))
        return (
            <div>
                Pick a user!
                <ul>
                    {usersItem}
                </ul>
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

