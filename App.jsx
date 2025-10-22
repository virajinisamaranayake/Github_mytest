import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PostForm from "./PostForm";
import WallPage from "./WallPage";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => setPosts([...posts, post]);
  const updatePost = (updated) => setPosts(updated);

  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="app-nav">
          <Link to="/" className="nav-link">Create Post</Link>
          <span className="nav-sep">|</span>
          <Link to="/wall" className="nav-link">View Wall</Link>
        </nav>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<PostForm addPost={addPost} />} />
            <Route path="/wall" element={<WallPage posts={posts} updatePost={updatePost} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
