import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderItem from "./LeaderItem";

class Leaderboard extends Component {
  render() {
    const { questions, users } = this.props;
    console.log(questions, users);

    let rankItems = [];
    rankItems.push("one", "two");
    return (
      <div>
        Leaderboard
        {rankItems.map((item) => (
          <LeaderItem />
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
