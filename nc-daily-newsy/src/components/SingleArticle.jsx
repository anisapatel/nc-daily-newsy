import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleComments from "./ArticleComments";
import Voter from "./Voter";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";
import * as utils from "../utils/utils";
import ViewToggler from "./ViewToggler";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null,
    formattedDate: ""
  };

  componentDidMount() {
    api
      .getArticleById(this.props.article_id)
      .then(article => {
        const formattedDate = utils.formatDate(article.created_at);
        this.setState({ article, isLoading: false, formattedDate });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: { status: response.status, msg: response.data.msg }
        });
      });
  }

  render() {
    const { article, isLoading, err, formattedDate } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorPage {...err} />;
    return (
      <>
        <section className="singleArticle">
          <h5>{article.title}</h5>
          <p>{article.body}</p>

          <p>
            r/{article.topic} · Posted by u/{article.author} on{" "}
            {formattedDate[0]} at {formattedDate[1]}
          </p>
          <div className="singleVote">
            <Voter
              id={this.props.article_id}
              votes={article.votes}
              type={"articles"}
            />
          </div>
        </section>

        <ViewToggler>
          <ArticleComments
            article_id={this.props.article_id}
            userInfo={this.props.userInfo}
          />
        </ViewToggler>
      </>
    );
  }
}

export default SingleArticle;
