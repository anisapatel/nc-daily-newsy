import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import CommentCard from "./CommentCard";
import { Link } from "@reach/router";

class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    api.getArticleComments(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  }

  render() {
    console.log(this.state.comments);
    const { comments, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <section>
        {comments.map(comment => {
          return (
            <section key={comment.comment_id}>
              <h3>Author: {comment.author}</h3>
              <p>Votes: {comment.votes}</p>
              <p>Date: {comment.created_at}</p>
              <p>{comment.body}</p>
            </section>
            // <CommentCard key={comment.comment_id} comment={comment.comment} />
          );
        })}
      </section>
    );
  }
}

export default ArticleComments;
