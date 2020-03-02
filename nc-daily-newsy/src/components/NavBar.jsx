import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class NavBar extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    api.getTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    const { topics } = this.state;
    return (
      <nav className="NavBar">
        <Link to="/">
          <button className="button">Home</button>
        </Link>
        {topics.map(topic => {
          return (
            <Link key={topic.slug} to={`/topics/${topic.slug}`}>
              <button className="button">{topic.slug}</button>
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default NavBar;
