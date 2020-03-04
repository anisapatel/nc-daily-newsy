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
  // <i class="far fa-thumbs-up"></i>

  render() {
    return (
      <div className="Voter">
        <button
          className="voteButton"
          onClick={({}) => {
            this.handleClick(1);
          }}
          disabled={this.state.optimisticVotes === 1}
        >
          <FontAwesomeIcon
            color="rgb(2, 181, 175)"
            size="2x"
            icon={faThumbsUp}
          />
          <span> Like</span>
          <p></p>
        </button>
        <p>{this.props.votes + this.state.optimisticVotes}</p>
        <button
          className="voteButton"
          onClick={({}) => {
            this.handleClick(-1);
          }}
          disabled={this.state.optimisticVotes === -1}
        >
          <FontAwesomeIcon
            color="rgb(2, 181, 175)"
            size="2x"
            icon={faThumbsDown}
          />
          <span> Dislike</span>
        </button>
      </div>
    );
  }
}

export default Voter;
