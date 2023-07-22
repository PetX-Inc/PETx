import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Accounts2.css"; // import CSS file with blur-effect class

import axios from 'axios';


function LoginSignUpButton() {
  const [showForm, setShowForm] = useState(false);

  const handleOpen = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div>
      <button className="buttonmain" onClick={handleOpen}>
        {/* <img class="rounded-circle discl" src="https://via.placeholder.com/30x30" alt=""></img> */}
        Profile
      </button>
      {showForm && <LoginForm onClose={handleClose} />}
    </div>
  );
}


function LoginForm({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    // handle login logic here
    onClose(); // call the onClose callback function to close the form
    navigate('/'); // navigate to the 'default homepage' route

    const res = await axios.post("http://localhost:8080/api/users/login", {email, password}) 
    console.log(res.status.toString())

    if (res.status === 200){
      alert("Logged in successfully")
    }
    else if (res.status === 400){
      alert("Invalid Credentials")
    }
    console.log(res.status)

  };

  const handleForgotPassword = () => {
    // handle forgot password logic here
  };

  const handleSignUpClick = () => {



    setShowSignUpForm(true);
  };

  if (showSignUpForm) {
    return <SignUpForm onCancel={() => setShowSignUpForm(false)} />;
    //{showForm && <LoginForm onClose={handleClose} />}

  }

  const handleLoginFormClose = () => {
    setShowSignUpForm(false);
    onClose();
  };

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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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

      <div className="form-group text-center mt-2">
        <button
          type="button"
          className="form-button btn btn-primary btn-sm cancel"
          onClick={onClose}
        >
          Close Form
        </button>
      </div>
    </div>
  );
}


function SignUpForm({onCancel, onClose}) {

//function SignUpForm({ onCancel, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();
    // handle sign up logic here

    const newUser = {
      email,password
    }

    const res = await axios.post("http://localhost:8080/api/users/createuser",newUser)
    if (res.status === 201){
      alert("User Created Successfully")
    }
    else{
      alert("Some Unexpected Error occured : User already registered")
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleClose = () => {
    onClose();
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
        <div className='form-group text-center'>
          <button type="submit" className="form-button">Sign Up</button>
          <button type="button" className="form-button cancel" onClick={handleCancel}>Have an account? Login</button>
        </div>
        <div className="form-group text-center mt-2">
          {/* <button type='button' className="form-button btn btn-primary btn-sm cancel" onClick={handleClose}>Close Form</button> */}
          {/* <button type='button' className="form-button btn btn-primary btn-sm cancel" onClick={onClose}>Close Form</button> */}
          <button type='button' className="form-button btn btn-primary btn-sm cancel" onClick={onCancel}>Close Form</button>


        </div>
      </form>
    </div>
  );
}

//export default LoginForm;
export default LoginSignUpButton;