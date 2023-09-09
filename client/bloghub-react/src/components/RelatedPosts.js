import React from 'react';

const RelatedPosts = ({ relatedPosts }) => {
  return (
    <div className="related-posts">
      <h3>Related Posts</h3>
      <ul>
        {relatedPosts.map((post, index) => (
          <li key={index}>
            <a href={`/post/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedPosts;
