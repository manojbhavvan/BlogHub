import React, { useState } from 'react';

const CommentSystem = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = () => {
    // Add the new comment to the comments list
    setComments([...comments, newComment]);
    // Clear the input field
    setNewComment('');
  };

  return (
    <div className="comment-system">
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <textarea
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <button onClick={handleSubmitComment}>Submit</button>
    </div>
  );
};

export default CommentSystem;
