import React from 'react';
import BlogPostList from './BlogPostList';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to BlogHub</h1>
      <BlogPostList />
    </div>
  );
};

export default HomePage;
