import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],  // All recipes
  searchTerm: '',  // Search term entered by the user
  filteredRecipes: [],  // Filtered recipes based on search term
  
  // Action to set the search term
  setSearchTerm: (term) => {
    set({ searchTerm: term }, () => {
      // Trigger filtering after updating the search term
      set((state) => {
        const filtered = state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
        );
        return { filteredRecipes: filtered };
      });
    });
  },

  // Action to set recipes (initial load or after modification)
  setRecipes: (recipes) => {
    set({ recipes, filteredRecipes: recipes });  // Initialize recipes and filtered list
  },
}));

export { useRecipeStore };