import React, { Component } from "react";
import * as api from "../utils/api";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink
} from "reactstrap";

class NavBar extends Component {
  state = {
    topics: [],
    isLoading: true,
    isOpen: false,
    navCollapsed: true,
    showNavbar: false
  };

  componentDidMount() {
    api.getTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { topics } = this.state;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <i className="fa fa-fw fa-home"></i>Home
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {topics.map(topic => {
                return (
                  <NavLink
                    // className="Link"
                    key={topic.slug}
                    href={`/topics/${topic.slug}`}
                  >
                    {topic.slug}
                  </NavLink>
                );
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
