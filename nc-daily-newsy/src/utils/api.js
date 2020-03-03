const axios = require("axios");

export const getTopics = () => {
  return axios
    .get("https://daily-newsy.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
};

export const getArticles = (topic, sort_by) => {
  return axios
    .get(`https://daily-newsy.herokuapp.com/api/articles`, {
      params: {
        topic,
        sort_by
      }
    })
    .then(({ data }) => {
      return data.article;
    });
};

export const getArticleById = article_id => {
  return axios
    .get(`https://daily-newsy.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article[0];
    });
};

export const getArticleComments = article_id => {
  return axios
    .get(
      `https://daily-newsy.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comment;
    });
};

export const postCommentById = (article_id, comment) => {
  return axios
    .post(
      `https://daily-newsy.herokuapp.com/api/articles/${article_id}/comments`,
      comment
    )
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteCommentById = comment_id => {
  return axios.delete(
    `https://daily-newsy.herokuapp.com/api/comments/${comment_id}`
  );
};
