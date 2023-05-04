import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

//import './Accounts2.css'; // import the CSS file
import "./Accounts2.css"; // import CSS file with blur-effect class


function LoginSignUpButton() {
  const [showForm, setShowForm] = useState(false);
  // const history = useHistory();


  const handleClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div>
      <button className="buttonmain" onClick={handleClick}>
      <img class="rounded-circle discl" src="https://via.placeholder.com/30x30" alt="">
        </img>
              Profile
        </button>
      {showForm && <LoginForm onClose={handleClose} />}
    </div>
  );
}


function LoginForm({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const history = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // handle login logic here
    //setIsOpen(false);
    onClose(); // call the onClose callback function to close the form
    history('/doctors'); // navigate to the '/doctors' route
  };

  const handleForgotPassword = () => {
    // handle forgot password logic here
  };

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };

  if (showSignUpForm) {
    return <SignUpForm onCancel={() => setShowSignUpForm(false)} />;
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="form-input"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="form-button">
          Login
        </button>
        <button
          type="button"
          className="form-button forgot-password"
          onClick={handleForgotPassword}
        >
          Forgot Password?
        </button>
        <div className="form-divider">
          <hr />
          <span className="form-divider-text">OR</span>
        </div>
        <div className="sign-up">
          <button
            type="button"
            className="form-button sign-up-button"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
        </div>
      </form>
      <button className="form-button cancel" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

function SignUpForm({ onCancel }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    // handle sign up logic here
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" className="form-input" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" id="password" className="form-input" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
          <input type="password" id="confirmPassword" className="form-input" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        </div>
        <button type="submit" className="form-button">Sign Up</button>
        <button type="button" className="form-button cancel" onClick={onCancel}>Have an account? Login</button>
      </form>
    </div>
  );
}


//export default LoginForm;
export default LoginSignUpButton;
