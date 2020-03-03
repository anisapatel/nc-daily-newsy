import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

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
    <article className="Article">
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>Topic: {topic}</p>
      <p>Date: {created_at}</p>
      <p>Votes: {votes}</p>
      <p>Author: {author}</p>
      <p>Comments: {comment_count}</p>
      <Voter id={article_id} votes={votes} type={"articles"} />
    </article>
  );
};

export default ArticleCard;
