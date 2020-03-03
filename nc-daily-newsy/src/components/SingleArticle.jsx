import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleComments from "./ArticleComments";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    api.getArticleById(this.props.article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  }

  render() {
    const { article } = this.state;
    return (
      <>
        <section className="singleArticle">
          <h3>{article.title}</h3>
          <p>{article.body}</p>
          <p>Votes: {article.votes}</p>
          <p>Topic: {article.topic}</p>
          <p>Author: {article.author}</p>
          <p>Date: {article.created_at}</p>
        </section>
        <ArticleComments
          article_id={this.props.article_id}
          userInfo={this.props.userInfo}
        />
      </>
    );
  }
}

export default SingleArticle;
