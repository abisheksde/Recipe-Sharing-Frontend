import React from 'react';
import '../css/UserFollowers.css';

const UserFollowers = ({ followers }) => {
  return (
    <div className="user-followers">
      <h2>Followers (10)</h2>
      {/* <h2>Followers ({followers.length})</h2> */}
{/*       
      {followers.map(follower => (
        <div key={follower.id} className="follower">
          {follower.name}
        </div>
      ))} */}

    </div>
  );
};

export default UserFollowers;
