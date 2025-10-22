import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostForm({ addPost }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!caption && !image) return;
    addPost({ caption, image: preview, likes: 0, comments: [] });
    navigate("/wall");
  };

  return (
    <div className="postform-container">
      <h2>Create a Post</h2>
      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Write a caption..."
        rows="3"
        className="caption-input"
      ></textarea>

      <div className="file-row">
        <input type="file" onChange={handleImageChange} className="file-input" />
        {preview && <img src={preview} alt="Preview" className="preview-image" />}
      </div>

      <div className="postform-actions">
        <button onClick={handleSubmit} className="btn-primary">Post</button>
      </div>
    </div>
  );
}

export default PostForm;
