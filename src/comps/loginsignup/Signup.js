import React, { useState } from 'react';
import './Auth.css';

const Signup = ({ switchForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: implement signup logic
  }

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign up</button>
        <p>Already have an account? <a href="#" onClick={switchForm}>Login</a></p>
      </form>
    </div>
  );
}

export default Signup;
