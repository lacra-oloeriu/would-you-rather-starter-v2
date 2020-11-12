import React, {Component} from 'react'
import {connect} from 'react-redux'
import Questions from './Questions'


class Leader extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                
                <ul >
                    {this.props.questionIds.map((id) =>(
                      <li key ={id}>
                          <div QUESTION id={id} />
                          </li> 
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ questions}) {
    return{
        questionIds: Object.keys(questions)
        //userIds: Object.keys(users)
        //.sort((a,b) => users[b].timestamp-users[a].timestamp)
    }
}


export default connect(mapStateToProps) (Leader)