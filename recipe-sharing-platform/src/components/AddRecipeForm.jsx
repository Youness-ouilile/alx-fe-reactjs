import React, { useState } from 'react';

const AddRecipeForm = () => {
  
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!title || !ingredients || !instructions) {
      setError('All fields are required.');
      return;
    }

    const ingredientsList = ingredients.split(',').map((ingredient) => ingredient.trim());
    if (ingredientsList.length < 2) {
      setError('Please provide at least two ingredients.');
      return;
    }

    
    setError('');
    const newRecipe = {
      title,
      ingredients: ingredientsList,
      instructions,
    };

    console.log('New Recipe:', newRecipe);
    
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">Add a New Recipe</h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-6">
        
        <div>
          <label htmlFor="title" className="block text-lg font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter recipe title"
          />
        </div>

      
        <div>
          <label htmlFor="ingredients" className="block text-lg font-medium mb-2">Ingredients (comma separated)</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter ingredients separated by commas"
            rows="4"
          />
        </div>

       
        <div>
          <label htmlFor="instructions" className="block text-lg font-medium mb-2">Instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter cooking instructions"
            rows="6"
          />
        </div>

       
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;