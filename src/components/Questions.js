import React ,{ Component } from 'react'
import { connect} from 'react-redux'
import { formatQuestion} from '../utils/helpers'




class Questions extends Component {
    render() {
         console.log("questionIds",this.props)
         console.log ('questionIds')
        return (
            <div className ='question'>
            
            </div>
    )
  }
}
            
            
       
            
function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id]
  
    return {
      questionIds: Object.keys(questions)
    }
  }
export default connect(mapStateToProps) ( Questions)