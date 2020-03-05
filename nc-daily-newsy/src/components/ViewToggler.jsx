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
        <button className="viewToggler" onClick={this.handleClick}>
          {this.state.isVisible ? "Hide comments" : "See comments"}
        </button>
        {this.state.isVisible && this.props.children}
      </section>
    );
  }
}

export default ViewToggler;
