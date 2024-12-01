import React from 'react';

const Home = () => {
  const login = () => {
   
    localStorage.setItem('isAuthenticated', 'true');
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Home;