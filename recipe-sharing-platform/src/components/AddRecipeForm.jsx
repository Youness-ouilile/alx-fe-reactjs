import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const validate = () => {
    let formErrors = {};

    if (!title) {
      formErrors.title = 'Recipe title is required.';
    }

    if (!ingredients) {
      formErrors.ingredients = 'Ingredients are required.';
    } else {
      const ingredientsList = ingredients.split(',').map((ingredient) => ingredient.trim());
      if (ingredientsList.length < 2) {
        formErrors.ingredients = 'Please provide at least two ingredients.';
      }
    }

    if (!steps) {
      formErrors.steps = 'Steps are required.';
    } else {
      const stepsList = steps.split('\n').map((step) => step.trim()).filter((step) => step !== '');
      if (stepsList.length < 1) {
        formErrors.steps = 'Please provide at least one step.';
      }
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    const newRecipe = {
      title,
      ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
      steps: steps.split('\n').map((step) => step.trim()).filter((step) => step !== ''),
    };

    console.log('New Recipe:', newRecipe);

    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-6 max-w-md mx-auto md:max-w-lg md:p-8">
        <div>
          <label htmlFor="title" className="block text-lg font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-3 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-2">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="ingredients" className="block text-lg font-medium mb-2">Ingredients (comma separated)</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-3 border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            placeholder="Enter ingredients separated by commas"
            rows="4"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-2">{errors.ingredients}</p>}
        </div>

        <div>
          <label htmlFor="steps" className="block text-lg font-medium mb-2">Recipe Steps</label>
          <textarea
            id="steps"
            name="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full p-3 border ${errors.steps ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            placeholder="Enter each step on a new line"
            rows="6"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-2">{errors.steps}</p>}
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


