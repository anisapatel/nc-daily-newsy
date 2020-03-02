import React from "react";

const CommentCard = props => {
  return (
    <section>
      <h3>Author: {props.comment.author}</h3>
      <p>Votes: {props.comment.votes}</p>
      <p>Date: {props.comment.created_at}</p>
      <p>{props.comment.body}</p>
    </section>
  );
};

export default CommentCard;
