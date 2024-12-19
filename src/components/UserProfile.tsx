import React from 'react';
import '../styles/UserProfile.css'

interface UserProfileProps {
  name: string;
  email: string;
  phone: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, phone }) => {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  );
};

export default UserProfile;
