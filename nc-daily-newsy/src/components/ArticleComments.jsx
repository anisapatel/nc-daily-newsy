import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import CommentDeleter from "./CommentDeleter";
import Voter from "./Voter";
import ViewToggler from "./ViewToggler";
import ErrorPage from "./ErrorPage";

class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true,
    err: null,
    isVisible: false
  };

  componentDidMount() {
    this.fetchArticleComments();
  }

  insertComment = comment => {
    this.setState(currentState => {
      return {
        comments: [comment, ...currentState.comments],
        isLoading: false,
        isVisible: !currentState.isVisible
      };
    });
  };

  removeComment = () => {
    this.fetchArticleComments();
  };

  fetchArticleComments = () => {
    api
      .getArticleComments(this.props.article_id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: { status: response.status, msg: response.data.msg }
        });
      });
  };

  render() {
    const { comments, isLoading, err, isVisible } = this.state;
    if (isLoading) return <Loader />;

    if (err) return <ErrorPage {...err} />;
    return (
      <section>
        {!comments.length && (
          <p className="p">
            There are currently no comments for this article. Add a comment...
          </p>
        )}
        <CommentAdder
          article_id={this.props.article_id}
          insertComment={this.insertComment}
        />
        {isVisible && (
          <p className="p">Hold tight! Your comment is being posted...</p>
        )}

        <ViewToggler>
          <div>
            {comments.map(comment => {
              return (
                <div key={comment.comment_id} className="commentArticle">
                  <CommentCard comment={comment} />
                  <Voter
                    votes={comment.votes}
                    id={comment.comment_id}
                    type={"comments"}
                  />
                  <CommentDeleter
                    comment_id={comment.comment_id}
                    removeComment={this.removeComment}
                    author={comment.author}
                    userInfo={this.props.userInfo}
                  />
                </div>
              );
            })}
          </div>
        </ViewToggler>
      </section>
    );
  }
}

export default ArticleComments;
