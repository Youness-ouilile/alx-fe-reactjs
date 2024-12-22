import { useState } from 'react';
import { fetchUserData } from '../services/githubAPI';

function SearchBar({ setUserData }) {
  const [username, setUsername] = useState('');

  const handleSearch = async () => {
    const data = await fetchUserData(username);
    setUserData(data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;