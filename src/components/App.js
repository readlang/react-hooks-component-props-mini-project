import React from "react";
import blogData from "../data/blog.js";
import About from "./About.js";
import ArticleList from "./ArticleList.js";
import Header from "./Header.js";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts} />

    </div>
  )
}

export default App;
