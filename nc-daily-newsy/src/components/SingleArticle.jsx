import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleComments from "./ArticleComments";
import Voter from "./Voter";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null
  };

  componentDidMount() {
    api
      .getArticleById(this.props.article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: { status: response.status, msg: response.data.msg }
        });
      });
  }

  render() {
    const { article, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorPage {...err} />;
    return (
      <>
        <section className="singleArticle">
          <h3>{article.title}</h3>
          <p>{article.body}</p>
          <p>Votes: {article.votes}</p>
          <p>Topic: {article.topic}</p>
          <p>Author: {article.author}</p>
          <p>Date: {article.created_at}</p>
          <Voter
            id={this.props.article_id}
            votes={article.votes}
            type={"articles"}
          />
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
