import React, { useState } from "react";
import "./editprofilepage.css"; // Separate CSS file

const EditProfilePage = () => {
  const [username, setUsername] = useState("john_doe");
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [password, setPassword] = useState("");

  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log("Updated profile:", { username, fullName, email });
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-card">
        <h2 className="title">Edit Profile</h2>
        <p className="subtitle">Update your profile details</p>
        <form onSubmit={handleSaveChanges} className="form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>
          <button type="submit" className="save-btn">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
