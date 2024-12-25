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
      // Fetch user data from GitHub API
      const data = await fetchUserData(username);
      
      // If data is returned, set the user data
      if (data) {
        setUserData({
          avatar_url: data.avatar_url,
          login: data.login,
          html_url: data.html_url
        });
      } else {
        setError("Looks like we cant find the usergit"); // Handle user not found
      }
    } catch (err) {
      setError('There was an error fetching the data'); // Handle API errors
    } finally {
      setLoading(false); // Set loading to false after API call
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

      
      {setUserData && (
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <img
            src={setUserData.avatar_url}
            alt={setUserData.login}
            style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '15px' }}
          />
          <div>
            <h2>{setUserData.login}</h2>
            <a href={setUserData.html_url} target="_blank" rel="noopener noreferrer">
              Visit GitHub Profile
            </a>
          </div>
        </div>
      )}

      
      {setError && <p style={{ color: 'red' }}>{setError}</p>}
    </div>
  );
}

export default Search;