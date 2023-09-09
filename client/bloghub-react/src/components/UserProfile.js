import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>{user.username}'s Profile</h2>
      <img src={user.profilePicture} alt={`${user.username}'s profile`} />
      <p>{user.bio}</p>
    </div>
  );
};

export default UserProfile;
