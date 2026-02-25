import React, { useState } from 'react';
import { convertUnit, getUnitsByCategory, getUnitCategory } from '../utils/unitConverter';
import './RecipeCard.css';

export default function RecipeCard({ recipe }) {
  const [selectedUnits, setSelectedUnits] = useState({});

  const handleUnitChange = (ingredientName, newUnit) => {
    setSelectedUnits(prev => ({
      ...prev,
      [ingredientName]: newUnit
    }));
  };

  const getDisplayAmount = (ingredient) => {
    const targetUnit = selectedUnits[ingredient.name];
    if (!targetUnit) {
      return ingredient.amount;
    }
    return convertUnit(ingredient.amount, ingredient.unit, targetUnit) || ingredient.amount;
  };

  const getDisplayUnit = (ingredient) => {
    return selectedUnits[ingredient.name] || ingredient.unit;
  };

  const getAvailableUnits = (ingredient) => {
    const category = getUnitCategory(ingredient.unit);
    return category ? getUnitsByCategory(category) : [ingredient.unit];
  };

  return (
    <div className="recipe-card">
      <h2>{recipe.name}</h2>
      <p className="description">{recipe.description}</p>
      
      <div className="recipe-meta">
        <span>👥 {recipe.servings} 人份</span>
        <span>⏱ 準備: {recipe.prepTime}分</span>
        <span>🍳 烹飪: {recipe.cookTime}分</span>
      </div>

      <div className="recipe-tags">
        {recipe.tags.map((tag, idx) => (
          <span key={idx} className="tag">{tag}</span>
        ))}
      </div>

      <div className="recipe-section">
        <h3>食材</h3>
        <div className="ingredients-list">
          {recipe.ingredients.map((ingredient, idx) => {
            const availableUnits = getAvailableUnits(ingredient);
            const showUnitSelector = availableUnits.length > 1;
            
            return (
              <div key={idx} className="ingredient-row">
                <span className="ingredient-name">{ingredient.name}</span>
                <div className="ingredient-amount">
                  <span className="amount">
                    {getDisplayAmount(ingredient).toFixed(2).replace(/\.?0+$/, '')}
                  </span>
                  {showUnitSelector ? (
                    <select
                      className="unit-selector"
                      value={getDisplayUnit(ingredient)}
                      onChange={(e) => handleUnitChange(ingredient.name, e.target.value)}
                    >
                      {availableUnits.map(unit => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span className="unit">{ingredient.unit}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="recipe-section">
        <h3>做法</h3>
        <ol className="instructions-list">
          {recipe.instructions.map((instruction, idx) => (
            <li key={idx}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
