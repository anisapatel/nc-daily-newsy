import React, { Component } from "react";

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
    return (
      <section>
        <button onClick={this.handleClick}>
          {this.state.isVisible ? "Hide comments" : "View comments"}
        </button>
        {this.state.isVisible && this.props.children}
      </section>
    );
  }
}

export default ViewToggler;
