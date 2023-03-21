
import React, {Component} from 'react'
import './Profile.css'
import {navbar_items, navbar_accounts} from '../helpers/Data'

import { useState } from "react";

const Profile = () => 
{
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("");

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleSaveProfile = () => {
    setEditMode(false);
    // Save changes to server
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    // Reset form fields to original values
  };

  const handleChangePassword = () => {
    // Handle changing password
  };

  return (
    <div>
      {editMode ? (
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            New Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleSaveProfile}>
            Save
          </button>
          <button type="button" onClick={handleCancelEdit}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h1>Profile</h1>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <button type="button" onClick={handleEditProfile}>
            Edit Profile
          </button>
          <button type="button" onClick={handleChangePassword}>
            Change Password
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;
