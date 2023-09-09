import React from 'react';
import BlogPost from './BlogPost';

const BlogPostList = () => {
  // Fetch and map blog posts from a data source
  const blogPosts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
    // Add more posts as needed
  ];

  return (
    <div className="blog-post-list">
      {blogPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPostList;
