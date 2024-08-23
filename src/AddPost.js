import React, { useState } from "react";
import axios from "axios";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/posts/", { title, content })
      .then((response) => {
        console.log("Post created successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the post!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Post</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
