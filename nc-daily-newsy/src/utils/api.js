import axios from "axios";
const baseURL = "https://daily-newsy.herokuapp.com/api/";

export const getTopics = () => {
  return axios.get(`${baseURL}topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (topic, sort_by) => {
  return axios
    .get(`${baseURL}articles`, {
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
  return axios.get(`${baseURL}articles/${article_id}`).then(({ data }) => {
    return data.article[0];
  });
};

export const getArticleComments = article_id => {
  return axios
    .get(`${baseURL}articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comment;
    });
};

export const postCommentById = (article_id, comment) => {
  return axios
    .post(`${baseURL}articles/${article_id}/comments`, comment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteCommentById = comment_id => {
  return axios.delete(`${baseURL}comments/${comment_id}`);
};

export const patchVoteById = (id, inc_votes, type) => {
  return axios.patch(`${baseURL}${type}/${id}`, {
    inc_votes
  });
};
