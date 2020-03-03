import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };

  handleClick = vote => {
    api.patchVoteById(this.props.id, vote, this.props.type);
    this.setState(currentState => {
      return { optimisticVotes: currentState.optimisticVotes + vote };
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={({}) => {
            this.handleClick(1);
          }}
          disabled={this.state.optimisticVotes === 1}
        >
          Like
        </button>
        <p>{this.props.votes + this.state.optimisticVotes}</p>
        <button
          onClick={({}) => {
            this.handleClick(-1);
          }}
          disabled={this.state.optimisticVotes === -1}
        >
          Dislike
        </button>
      </div>
    );
  }
}

export default Voter;
