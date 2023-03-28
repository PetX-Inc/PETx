import React, { useState } from 'react';
import './Auth.css';

const Login = ({ switchForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: implement login logic
  }

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="#" onClick={switchForm}>Sign up</a></p>
      </form>
    </div>
  );
}

export default Login;
