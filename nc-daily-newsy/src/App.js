import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <NavBar />
        <ArticleList />
        <Footer />
      </div>
    );
  }
}

export default App;
