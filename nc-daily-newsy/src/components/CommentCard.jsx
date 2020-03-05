import React from "react";
import * as utils from "../utils/utils";

const CommentCard = ({ comment: { author, votes, created_at, body } }) => {
  const formattedDate = utils.formatDate(created_at);
  return (
    <section className="Comments">
      <p className="commentP">
        Posted by u/{author} on {formattedDate[0]} at {formattedDate[1]}
      </p>
      <p>{body}</p>
    </section>
  );
};

export default CommentCard;
