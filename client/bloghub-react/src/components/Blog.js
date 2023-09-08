// src/components/Blog.js

import React from 'react';
import BlogPost from './BlogPost';
import blogData from './blogData';

const Blog = () => (
  <div className="blog">
    {blogData.map((post) => (
      <BlogPost key={post.id} post={post} />
    ))}
  </div>
);

export default Blog;
