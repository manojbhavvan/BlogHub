import React, { useState } from 'react';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement login logic and set loggedIn to true upon successful login.
  };

  const handleLogout = () => {
    // Implement logout logic and set loggedIn to false.
  };

  return (
    <div className="auth">
      {loggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default Auth;
