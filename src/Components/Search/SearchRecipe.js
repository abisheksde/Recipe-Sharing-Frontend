// SearchBlog.js

import React, { useState } from 'react';
import axios from 'axios';

const SearchRecipe = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/recipes/list?keyword=${keyword}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <h2>Search Blogs</h2>
      <div>
        <input
          type="text"
          placeholder="Enter keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {results.length > 0 ? (
          <ul>
            {results.map((recipe) => (
              <li key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.difficulty}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchRecipe;
