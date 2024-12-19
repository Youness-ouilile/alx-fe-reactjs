import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const recipeDetail = recipeData.find((recipe) => recipe.id === parseInt(id));
    if (recipeDetail) {
      setRecipe(recipeDetail);
    } else {
      navigate('/'); 
    }
  }, [id, navigate]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
      >
        Back to Home
      </button>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-96 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
            <ul className="list-disc pl-5 space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Cooking Instructions:</h2>
            <p className="text-gray-700">{recipe.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;