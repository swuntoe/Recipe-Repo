import React, { useState, useMemo } from 'react';
import RecipeCard from './RecipeCard';
import './RecipeList.css';

export default function RecipeList({ recipes }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  // 獲取所有標籤
  const allTags = useMemo(() => {
    const tags = new Set();
    recipes.forEach(recipe => {
      recipe.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [recipes]);

  // 過濾食譜
  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesSearch = 
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => recipe.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [recipes, searchTerm, selectedTags]);

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="recipe-list-container">
      <div className="filter-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="搜尋食譜..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="tag-filters">
          <p>標籤篩選:</p>
          <div className="tag-buttons">
            {allTags.map(tag => (
              <button
                key={tag}
                className={`tag-button ${selectedTags.includes(tag) ? 'active' : ''}`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="results-info">
        找到 {filteredRecipes.length} 個食譜
      </div>

      <div className="recipes-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <div className="no-results">
            <p>😕 找不到符合條件的食譜</p>
          </div>
        )}
      </div>
    </div>
  );
}
