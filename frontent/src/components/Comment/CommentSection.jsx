import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSection = ({ productId, userId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch comments for the product
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `localhost:5000/api/v1/users/comment/${productId}`
        );
        setComments(response.data.data || []);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [productId]);

  // Handle multiple image selection
  const handleImageChange = (e) => {
    setImages([...e.target.files]); // Store multiple selected files
  };

  // Handle comment submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("userId", userId);
    formData.append("commentText", commentText);

    // Append multiple images to FormData
    images.forEach((image) => {
      formData.append("imageFiles", image);
    });

    try {
      const response = await axios.post(
        "localhost:5000/api/v1/users/comment/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setComments([...comments, response.data.data]); // Update UI with new comment
      setCommentText(""); // Reset input
      setImages([]); // Clear selected images
    } catch (error) {
      console.error("Error uploading comment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Comments</h4>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            multiple
            onChange={handleImageChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Posting..." : "Post Comment"}
        </button>
      </form>

      {/* Display Comments */}
      {comments.length > 0 ? (
        <ul className="list-group">
          {comments.map((comment) => (
            <li key={comment._id} className="list-group-item">
              <div>
                <strong>User {comment.userId}</strong> - {comment.commentText}
              </div>
              {/* Show multiple images */}
              {comment.imageFiles && comment.imageFiles.length > 0 && (
                <div className="mt-2">
                  {comment.imageFiles.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="Comment"
                      className="img-thumbnail me-2"
                      width="100"
                    />
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default CommentSection;
