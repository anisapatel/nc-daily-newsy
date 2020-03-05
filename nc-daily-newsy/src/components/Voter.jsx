import React, { Component } from "react";
import * as api from "../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

class Voter extends Component {
  state = {
    optimisticVotes: 0,
    err: null
  };

  handleClick = vote => {
    console.log("clicked..");
    api.patchVoteById(this.props.id, vote, this.props.type).catch(() => {
      this.setState({ err: true });
    });
    this.setState(currentState => {
      return { optimisticVotes: currentState.optimisticVotes + vote };
    });
  };

  render() {
    return (
      <div className="voterWrapper">
        {this.state.err && <p>Unable to vote!</p>}
        <div className="Voter">
          <button
            className="voteButton"
            onClick={() => {
              this.handleClick(1);
            }}
            disabled={this.state.optimisticVotes > 0}
          >
            <FontAwesomeIcon
              color="rgb(2, 181, 175)"
              size="2x"
              icon={faThumbsUp}
            />
          </button>
          <span>{""} Like</span>

          <p>{this.props.votes + this.state.optimisticVotes}</p>
          <button
            className="voteButton"
            onClick={() => {
              this.handleClick(-1);
            }}
            disabled={this.state.optimisticVotes < 0}
          >
            <FontAwesomeIcon
              color="rgb(2, 181, 175)"
              size="2x"
              icon={faThumbsDown}
            />
          </button>
          <span> Dislike</span>
        </div>
      </div>
    );
  }
}

export default Voter;
