import React from "react";

const CommentCard = ({ comment: { author, votes, created_at, body } }) => {
  return (
    <section className="Comments">
      <h3>Author: {author}</h3>
      <p>Votes: {votes}</p>
      <p>Date: {created_at}</p>
      <p>{body}</p>
    </section>
  );
};

export default CommentCard;
