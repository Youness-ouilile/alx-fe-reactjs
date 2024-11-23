import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';

import RecipeDetails from './components/RecipeDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <AddRecipeForm />
        <RecipeList />
        <SearchBar />
        <Routes>
        
          <Route path="/" element={<RecipeList />} />
          
          
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
        <Switch>
          <Route path="/favorites">
            <FavoritesList />
          </Route>
          <Route path="/recommendations">
            <RecommendationsList />
          </Route>
          <Route path="/">
            <RecipeList />
          </Route>
        </Switch>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
