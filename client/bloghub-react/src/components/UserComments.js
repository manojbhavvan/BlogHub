import React from 'react';

const UserComments = ({ comments }) => {
  return (
    <div className="user-comments">
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.text}</p>
            <p className="comment-author">Posted by: {comment.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserComments;
