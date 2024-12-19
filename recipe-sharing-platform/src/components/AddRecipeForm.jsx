import React, { useState } from 'react';

const AddRecipeForm = () => {
 
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

 
  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!title || !ingredients || !steps) {
      setError('All fields are required.');
      return;
    }

   
    const ingredientsList = ingredients.split(',').map((ingredient) => ingredient.trim());

    if (ingredientsList.length < 2) {
      setError('Please provide at least two ingredients.');
      return;
    }

   
    const stepsList = steps.split('\n').map((step) => step.trim()).filter((step) => step !== '');

    if (stepsList.length < 1) {
      setError('Please provide at least one step.');
      return;
    }

    
    setError('');
    const newRecipe = {
      title,
      ingredients: ingredientsList,
      steps: stepsList,
    };

    console.log('New Recipe:', newRecipe);
    
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">Add a New Recipe</h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-6">
        {/* Recipe Title */}
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
          <label htmlFor="steps" className="block text-lg font-medium mb-2">Recipe Steps</label>
          <textarea
            id="steps"
            name="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter each step on a new line"
            rows="6"
          />
          <p className="text-sm text-gray-500 mt-2">Please list each step of the recipe on a new line.</p>
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