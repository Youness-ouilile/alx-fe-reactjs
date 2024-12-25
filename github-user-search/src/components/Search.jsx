import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search({ setUserData, setLoading, setError }) {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

 
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const data = await fetchUserData(username, location, minRepos, currentPage);
      if (data) {
        setResults(data.items); 
      } else {
        setError("Looks like we cant find the user");
      }
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label className='block text-sm font-medium text-red-700'>GitHub Username</label>
          <input
            type="text"
            placeholder="Search by GitHub username"
            value={username}
            onChange={(e) => handleChange(e, setUsername)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            placeholder="Search by location"
            value={location}
            onChange={(e) => handleChange(e, setLocation)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
          <input
            type="number"
            placeholder="Minimum repositories"
            value={minRepos}
            onChange={(e) => handleChange(e, setMinRepos)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
        >
          Search
        </button>
      </form>

     
      <div className="mt-6">
        {results.length > 0 ? (
          results.map((user) => (
            <div key={user.id} className="flex items-center space-x-4 border-b py-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-64 h-64 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300" 
              />
              <div>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-indigo-600"
                >
                  {user.login}
                </a>
                <p className="text-gray-500 text-sm">{user.location || 'No location provided'}</p>
                <p className="text-gray-500 text-sm">Repositories: {user.public_repos}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>

      
      {results.length > 0 && (
        <div className="mt-4">
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
