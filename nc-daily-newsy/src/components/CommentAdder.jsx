import React, { Component } from "react";
import * as api from "../utils/api";

class CommentAdder extends Component {
  state = {
    username: "tickle122",
    body: "",
    isLoading: true
  };

  handleChange = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    api
      .postCommentById(this.props.article_id, { ...this.state })
      .then(([comment]) => {
        this.props.insertComment(comment);
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
            ></textarea>
          </label>
          <button className="commentButton">Comment</button>
        </form>
      </section>
    );
  }
}

export default CommentAdder;
