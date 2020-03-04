import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";
import { Router } from "@reach/router";
import SingleArticle from "./components/SingleArticle";
import ArticleComments from "./components/ArticleComments";

class App extends Component {
  state = {
    userInfo: {
      user: "tickle122",
      avatar: "https://image.flaticon.com/icons/png/512/17/17004.png"
    }
  };
  render() {
    return (
      <div>
        <Title userInfo={this.state.userInfo} />
        <NavBar />
        <Router primary={false}>
          <ArticleList path="/" />
          <ArticleList path="/topics/:topic_slug" />
          <SingleArticle
            path="/articles/:article_id"
            userInfo={this.state.userInfo.user}
          />
          <ArticleComments
            path="/articles/:article_id/comments"
            userInfo={this.state.userInfo.user}
          />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
