import React, { Component } from "react";
import ArticleComments from "./ArticleComments";
import CommentCard from "./CommentCard";

class ViewToggler extends Component {
  state = {
    isVisible: false
  };

  handleClick = event => {
    this.setState(currentState => {
      return { isVisible: !currentState.isVisible };
    });
  };

  render() {
    console.log(this.props.children);
    return (
      <section>
        <button onClick={this.handleClick}>
          {this.state.isVisible ? "hide" : "show"}
        </button>
        {!this.state.isVisible && this.props.children}
      </section>
    );
  }
}

export default ViewToggler;
