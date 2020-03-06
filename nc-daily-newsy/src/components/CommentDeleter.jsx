import React, { Component } from "react";
import * as api from "../utils/api";

class CommentDeleter extends Component {
  state = {
    isDeleting: false
  };

  handleClick = event => {
    event.preventDefault();
    if (this.props.userInfo === this.props.author) {
      this.setState({ isDeleting: true }, () => {
        api.deleteCommentById(this.props.comment_id).then(() => {
          this.props.removeComment();
        });
      });
    }
  };

  render() {
    return (
      <div>
        <button
          className="commentDelete"
          onClick={this.handleClick}
          disabled={this.state.isDeleting}
        >
          Delete
        </button>
        {this.state.isDeleting && (
          <p>Hold tight! Your comment is being deleted...</p>
        )}
      </div>
    );
  }
}

export default CommentDeleter;
