import React from 'react';
import '../css/UserFollowing.css';

const UserFollowing = ({ following }) => {
  return (
    <div className="user-following">
      <h2>Following ({following.length})</h2>
      {following.map(user => (
        <div key={user.id} className="following">
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default UserFollowing;
