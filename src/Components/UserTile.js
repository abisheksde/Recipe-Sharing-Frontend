// src/UserTile.js
import React from 'react';
import './UserTile.css';
import FollowButton from './FollowButton';
import LikeButton from './LikeButton';

const UserTile = ({ user, followers, followings }) => {


  return (

    
      <ul>
      {user.map(users => (
        <li>
          <div className="user-tile">
            <div className="user-info">
              <h2>{users.fullname}</h2>
              <p>{"Email : " + users.username}</p>
            </div>
            <div>
              <FollowButton/>
            </div>
            
          </div>
        </li>
      ))}
    </ul>
  );
}

    // <div >
    //   {/* <img src={user.avatar} alt={`${user.name}'s avatar`} className="user-avatar" /> */}
    //   <div >
        
    //     <ul>
    //             {user.map(users => (
    //                 <li key={users.id}>
    //                     
                        
    //                 </li>
    //             ))}
    //         </ul>
    //   </div>
    // </div>


export default UserTile;
