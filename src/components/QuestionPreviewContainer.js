import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";
import { Tab, Tabs } from "react-bootstrap";

class QuestionPreviewContainer extends Component {
  render() {
    const { questions, users, questionIds, authedUser } = this.props;

    function getQuestion(id) {
      return questions[id];
    }

    function getAuthor(qId) {
      let question = getQuestion(qId);
      let authorId = question.author;
      return users[authorId];
    }

    let unanswered = [];
    let answerd = [];

    function compare(a, b) {
      let qa = questions[a];
      let qb = questions[b];
      if (qa.timestamp < qb.timestamp) {
        return 1;
      }
      if (qa.timestamp > qb.timestamp) {
        return -1;
      }
      return 0;
    }
    questionIds.sort(compare);

    questionIds.forEach((id) => {
      const theQuestion = questions[id];
      const allVotes = theQuestion.optionOne.votes.concat(
        theQuestion.optionTwo.votes
      );

      if (allVotes.includes(authedUser)) {
        answerd.push(id);
      } else {
        unanswered.push(id);
      }
    });

    return (
      <div>
        <Tabs defaultActiveKey="Unanswered" id="uncontrolled-tab-example">
          <Tab eventKey="Unanswered" title="Unanswered Question">
            {unanswered.map((id) => (
              <QuestionPreview
                key={id}
                question={getQuestion(id)}
                author={getAuthor(id)}
              />
            ))}
          </Tab>
          <Tab eventKey="answerd" title="Answerd Question">
            {answerd.map((id) => (
              <QuestionPreview
                key={id}
                question={getQuestion(id)}
                author={getAuthor(id)}
              />
            ))}
          </Tab>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questionIds: Object.keys(questions),
    questions,
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(QuestionPreviewContainer);
