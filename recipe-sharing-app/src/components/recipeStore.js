import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '', 
  filteredRecipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) => 
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) || 
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(state.searchTerm.toLowerCase()))
    )
  })),

 
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),
  
  
  setRecipes: (recipes) => set({ recipes }),

  
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
  })),
}));

export default useRecipeStore;