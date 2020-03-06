import React, { Component } from "react";
import * as api from "../utils/api";

class CommentAdder extends Component {
  state = {
    username: "tickle122",
    body: "",
    isLoading: true,
    isPosting: false
  };

  handleChange = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isPosting: true }, () => {
      api
        .postCommentById(this.props.article_id, { ...this.state })
        .then(([comment]) => {
          this.props.insertComment(comment);
          this.setState({ isPosting: false, body: "" });
        });
    });
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label className="form">
            Comment as {this.state.username}:
            <textarea
              rows="4"
              cols="50"
              className="Input"
              type="text"
              placeholder="What are your thoughts?"
              id="body"
              onChange={this.handleChange}
              required
              value={this.state.body}
            ></textarea>
          </label>
          <button className="commentButton" disabled={this.state.isPosting}>
            Comment
          </button>
        </form>
        {this.state.isPosting && (
          <p className="p">Hold tight! Your comment is being posted...</p>
        )}
      </section>
    );
  }
}

export default CommentAdder;
