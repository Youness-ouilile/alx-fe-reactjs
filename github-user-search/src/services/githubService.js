import axios from 'axios';




export const fetchUserData = async (username, location, minRepos, page = 1) => {
  try {
  
    let query = `user:${username}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos > 0) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`
    );

    return response.data; 
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch user data');
  }
};



