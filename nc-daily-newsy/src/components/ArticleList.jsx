import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: undefined
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic_slug !== this.props.topic_slug) {
      this.fetchArticles();
    }
  }

  handleChange = ({ target: { value } }) => {
    console.log(value);
    this.setState(currentState => {
      return { ...currentState, sort_by: value };
    });
  };

  fetchArticles = () => {
    api
      .getArticles(this.props.topic_slug, this.state.sort_by)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.fetchArticles();
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loader />;

    return (
      <main className="Main">
        <form onSubmit={this.handleSubmit} defaultValue="">
          <label>
            Sort by:
            <select onChange={this.handleChange}>
              <option value="created_at">Date</option>
              <option value="comment_count">Comments</option>
              <option value="votes">Votes</option>
            </select>
          </label>
          <button>Submit</button>
        </form>
        {articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </main>
    );
  }
}

export default ArticleList;
