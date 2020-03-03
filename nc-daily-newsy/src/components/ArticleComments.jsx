import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import CommentCard from "./CommentCard";

import CommentAdder from "./CommentAdder";
import CommentDeleter from "./CommentDeleter";
import Voter from "./Voter";

class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchArticleComments();
  }

  insertComment = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  removeComment = () => {
    this.fetchArticleComments();
  };

  fetchArticleComments = () => {
    api.getArticleComments(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <section>
        <CommentAdder
          article_id={this.props.article_id}
          insertComment={this.insertComment}
        />

        {comments.map(comment => {
          return (
            <div key={comment.comment_id}>
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
      </section>
    );
  }
}

export default ArticleComments;
