import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import * as utils from "../utils/utils";

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
  const formattedDate = utils.formatDate(created_at);

  return (
    <div>
      <article className="Article">
        <p className="articleInfo">
          r/{topic} · Posted by u/{author} on {formattedDate[0]} at{" "}
          {formattedDate[1]}
        </p>
        <Link to={`/articles/${article_id}`}>
          <h4>{title}</h4>
        </Link>

        <div className="commentLink">
          <Link to={`/articles/${article_id}/comments`}>
            <FontAwesomeIcon icon={faCommentAlt}></FontAwesomeIcon>{" "}
            <span>{comment_count} Comment(s)</span>
          </Link>
        </div>
        <Voter id={article_id} votes={votes} type={"articles"} />
      </article>
    </div>
  );
};

export default ArticleCard;
