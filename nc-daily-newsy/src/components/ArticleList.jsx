import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: undefined,
    err: null
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic_slug !== this.props.topic_slug) {
      this.fetchArticles();
    }
  }

  handleChange = ({ target: { value, id } }) => {
    this.setState(currentState => {
      return { ...currentState, [id]: value };
    });
  };

  fetchArticles = () => {
    api
      .getArticles(this.props.topic_slug, this.state.sort_by)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: { status: response.status, msg: response.data.msg }
        });
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.fetchArticles();
  };

  render() {
    const { articles, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorPage {...err} />;

    return (
      <main className="Main">
        <div className="sortForm">
          <form
            onSubmit={this.handleSubmit}
            defaultValue=""
            className="sort_by"
          >
            <label>
              Sort by:
              <select
                onChange={this.handleChange}
                id="sort_by"
                className="sortInput"
              >
                <option value="created_at">Date</option>
                <option value="comment_count">Comments</option>
                <option value="votes">Votes</option>
              </select>
            </label>
            <button className="submitButton">Submit</button>
          </form>
        </div>
        {articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </main>
    );
  }
}

export default ArticleList;
