import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderItem from "./LeaderItem";

class Leaderboard extends Component {
  render() {
    const { questions, users } = this.props;

    function getPointsFromQuestion(userKey, questionKey) {
      let question = questions[questionKey];

      let points = 0;
      let answerd = 0;
      let created = 0;
      if (question.author === userKey) {
        points++;
        created++;
      }

      let allVotes = question.optionOne.votes.concat(question.optionTwo.votes);

      if (allVotes.includes(userKey)) {
        points++;
        answerd++;
      }

      return {
        points,
        answerd,
        created,
        userKey,
      };
    }

    let pointArray = [];
    Object.keys(users).forEach((userKey) => {
      let points = 0;
      let answerd = 0;
      let created = 0;

      Object.keys(questions).forEach((questionKey) => {
        let pointResult = getPointsFromQuestion(userKey, questionKey);
        points = points + pointResult.points;
        answerd = answerd + pointResult.answerd;
        created = created + pointResult.created;
      });
      pointArray.push({ points, answerd, created, userKey });
    });

    function compare(a, b) {
      if (a.points < b.points) {
        return 1;
      }
      if (a.points > b.points) {
        return -1;
      }
      return 0;
    }

    pointArray.sort(compare);

    let rankItems = [];
    rankItems.push("one", "two");
    return (
      <div>
        Leaderboard
        {pointArray.map((item) => (
          <LeaderItem
            key={item.userKey}
            user={users[item.userKey]}
            pointObject={item}
          />
        ))}
      </div>
    );
  }
}

function mapSateToProps({ questions, users }) {
  return {
    questions,
    users,
  };
}

export default connect(mapSateToProps)(Leaderboard);
