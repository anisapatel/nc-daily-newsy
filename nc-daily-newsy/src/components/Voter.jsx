import React, { Component } from "react";
import * as api from "../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

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
      <div className="Voter">
        <FontAwesomeIcon
          color="#0366ad"
          size="2x"
          icon={faThumbsUp}
          onClick={({}) => {
            this.handleClick(1);
          }}
          disabled={this.state.optimisticVotes === 1}
        />

        <p>{this.props.votes + this.state.optimisticVotes}</p>
        <FontAwesomeIcon
          color="#0366ad"
          size="2x"
          icon={faThumbsDown}
          onClick={({}) => {
            this.handleClick(-1);
          }}
          disabled={this.state.optimisticVotes === -1}
        />
      </div>
    );
  }
}

export default Voter;
