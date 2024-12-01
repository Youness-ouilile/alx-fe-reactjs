import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

 
  const setErrors = (errors) => {
    setFormErrors(errors);
  };

  const validate = () => {
    const errors = {};

    if (!username) {
      errors.username = 'Username is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      setError('Please fix the errors above');
      return;
    }

    const userData = { username, email, password };
    console.log('User registered:', userData);

    setUsername('');
    setEmail('');
    setPassword('');
    setFormErrors({
      username: '',
      email: '',
      password: '',
    });
    setError('');
  };

  return (
    <div>
      <h2>Registration Form</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {formErrors.username && <div style={{ color: 'red' }}>{formErrors.username}</div>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {formErrors.email && <div style={{ color: 'red' }}>{formErrors.email}</div>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {formErrors.password && <div style={{ color: 'red' }}>{formErrors.password}</div>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;