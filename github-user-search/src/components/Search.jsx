import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function SearchBar({ setUserData, setLoading, setError }) {
  const [username, setUsername] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

   
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
     
      const data = await fetchUserData(username);
      if (data) {
        setUserData(data); 
      } else {
        setError("Looks like we can't find the user"); 
      }
    } catch (err) {
      setError('There was an error fetching the data'); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;