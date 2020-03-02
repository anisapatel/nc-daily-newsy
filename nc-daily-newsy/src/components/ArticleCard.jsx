import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({
  article: {
    title,
    topic,
    created_at,
    votes,
    author,
    comment_count,
    article_id
  }
}) => {
  return (
    <article>
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>Topic: {topic}</p>
      <p>Date: {created_at}</p>
      <p>Votes: {votes}</p>
      <p>Author: {author}</p>
      <p>Comments: {comment_count}</p>
    </article>
  );
};

export default ArticleCard;
