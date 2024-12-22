import { useState } from 'react'
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <SearchBar setUserData={setUserData} />
      {userData && <UserProfile user={userData} />}
    </div>
  )
}

export default App
