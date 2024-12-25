import { useState } from 'react';
import './app.css';
import SearchBar from './components/Search';
import UserProfile from './components/UserProfile';
import './index.css';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <SearchBar setUserData={setUserData} setLoading={setLoading} setError={setError} />
      
      {loading && <p>Loading...</p>}
      
      {error && <p>{error}</p>}

      {userData && !loading && !error && <UserProfile user={userData} />}
    </div>
  );
}

export default App;
