import React from "react";
import * as api from "../utils/api";

const CommentDeleter = ({ userInfo, author, comment_id, removeComment }) => {
  const handleClick = event => {
    event.preventDefault();
    if (userInfo === author) {
      api.deleteCommentById(comment_id).then(() => {
        removeComment();
      });
    }
  };

  return (
    <div>
      <button className="commentDelete" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
};

export default CommentDeleter;
