import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State variables for the form fields
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  
  // State to track errors
  const [errors, setErrors] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    let formErrors = {};

    // Title validation
    if (!title) {
      formErrors.title = 'Recipe title is required.';
    }

    // Ingredients validation
    if (!ingredients) {
      formErrors.ingredients = 'Ingredients are required.';
    } else {
      const ingredientsList = ingredients.split(',').map((ingredient) => ingredient.trim());
      if (ingredientsList.length < 2) {
        formErrors.ingredients = 'Please provide at least two ingredients.';
      }
    }

    // Steps validation
    if (!steps) {
      formErrors.steps = 'Steps are required.';
    } else {
      const stepsList = steps.split('\n').map((step) => step.trim()).filter((step) => step !== '');
      if (stepsList.length < 1) {
        formErrors.steps = 'Please provide at least one step.';
      }
    }

    // If there are errors, set them and stop form submission
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // If no errors, reset errors and submit data
    setErrors({});
    const newRecipe = {
      title,
      ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
      steps: steps.split('\n').map((step) => step.trim()).filter((step) => step !== ''),
    };

    console.log('New Recipe:', newRecipe); // In real-world, send this data to a server

    // Reset the form after submission
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">Add a New Recipe</h2>

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
            className={`w-full p-3 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-2">{errors.title}</p>}
        </div>

        {/* Ingredients */}
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

        {/* Recipe Steps */}
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

        {/* Submit Button */}
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
