// src/components/BlogPost.js

import React from 'react';

const BlogPost = ({ post }) => (
  <div className="blog-post">
    <h2>{post.title}</h2>
    <p>{post.content}</p>
  </div>
);

export default BlogPost;
