import React, { useState } from "react";

function WallPage({ posts, updatePost }) {
  const handleLike = (index) => {
    const updated = [...posts];
    updated[index].likes += 1;
    updatePost(updated);
  };

  const handleComment = (index, comment) => {
    if (!comment) return;
    const updated = [...posts];
    updated[index].comments.push(comment);
    updatePost(updated);
  };

  return (
    <div className="wall-container">
      <h2>Social Wall</h2>
      {posts.length === 0 && <p className="empty">No posts yet!</p>}
      {posts
        .slice(0)
        .reverse()
        .map((post, i) => (
          <div key={i} className="post-card">
            {post.image && <img src={post.image} alt="Post" className="post-image" />}
            <p className="post-caption">{post.caption}</p>

            <div className="post-actions">
              <button onClick={() => handleLike(i)} className="like-btn">❤️ {post.likes}</button>
            </div>

            <CommentSection index={i} post={post} handleComment={handleComment} />
          </div>
        ))}
    </div>
  );
}

function CommentSection({ index, post, handleComment }) {
  const [text, setText] = useState("");
  return (
    <div className="comment-section">
      <input
        type="text"
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="comment-input"
      />
      <button className="btn-comment" onClick={() => { handleComment(index, text); setText(""); }}>➤</button>

      <div className="comments-list">
        {post.comments.map((c, j) => (
          <p key={j} className="comment-item">💬 {c}</p>
        ))}
      </div>
    </div>
  );
}

export default WallPage;
