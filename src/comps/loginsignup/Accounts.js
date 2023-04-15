import "./Accounts.css"; // import CSS file with blur-effect class


import React, { useState } from "react";


function LoginForm() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignUpForm(false);
  };

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
    setShowLoginForm(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    // handle signup logic here
  };

  return (
    <div className="login-form">
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleSignUpClick}>Sign Up</button>

      {showLoginForm && (
        <form onSubmit={handleLoginSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button type="submit">Login</button>
          <button>Forgot Password</button>
        </form>
      )}

      {showSignUpForm && (
        <form onSubmit={handleSignUpSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          {/* Additional form fields for sign up */}
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
