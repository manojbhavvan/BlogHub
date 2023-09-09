import React from 'react';

const CategoriesTags = () => {
  // Fetch and map categories and tags from a data source
  const categories = ['Technology', 'Travel', 'Food', 'Lifestyle'];
  const tags = ['React', 'JavaScript', 'Recipes', 'Fashion'];

  return (
    <div className="categories-tags">
      <div className="categories">
        <h3>Categories</h3>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
      <div className="tags">
        <h3>Tags</h3>
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesTags;
