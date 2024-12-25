import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search({ setUserData, setLoading, setError }) {
  const [username, setUsername] = useState('');

 
  const handleSearch = async (e) => {
    e.preventDefault();

    
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      
      const data = await fetchUserData(username);
      if (data) {
        setUserData(data); // Set user data if found
      } else {
        setError("Looks like we can't find the user"); // Show error if no user found
      }
    } catch (err) {
      setError('There was an error fetching the data'); // Handle API errors
    } finally {
      setLoading(false); // Set loading to false after the API call completes
    }
     try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (err) {
      setError('User not found or invalid username.');
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

export default Search;