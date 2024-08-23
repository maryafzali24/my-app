import React from "react";
import PostList from "./PostList";
import AddPost from "./AddPost";

function App() {
  return (
    <div className="App">
      <h1>My Simple React App</h1>
      <AddPost />
      <PostList />
    </div>
  );
}

export default App;
