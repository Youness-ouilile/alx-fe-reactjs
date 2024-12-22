import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search({ setUserData, setLoading, setError }) {
  const [username, setUsername] = useState('');

  // Handle the search form submission
  const handleSearch = async (e) => {
    e.preventDefault();

    // Clear previous results and set loading state
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      // Fetch user data using the GitHub API
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