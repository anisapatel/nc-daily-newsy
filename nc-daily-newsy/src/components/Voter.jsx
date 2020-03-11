import React, { Component } from "react";
import * as api from "../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

class Voter extends Component {
  state = {
    optimisticVotes: 0,
    err: false
  };

  handleClick = vote => {
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
            // className="voteButton"
            className="Like"
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
            <div className="pLike">
              <span>{""} Like</span>
            </div>
          </button>

          <p className="likeVotes">
            {this.props.votes + this.state.optimisticVotes}
          </p>
          <button
            className="disLike"
            onClick={() => {
              this.handleClick(-1);
            }}
            disabled={this.state.optimisticVotes < 0}
          >
            <FontAwesomeIcon
              color="rgb(2, 181, 175)"
              size="2x"
              icon={faThumbsDown}
              className="dIcon"
            />
            <div className="p.disLike">
              <span>{""} Dislike</span>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default Voter;
