// src/UserTile.js
import React from 'react';
import '../UserTile.css';

import RecipesButton from '../Buttons/RecipeButton';
import BlockButton from '../Buttons/BlockButton';

const UserTileForAdmin = ({ user }) => {


  return (

    
      <ul>
      {user.map(users => (
        <li key={users.id}>
          <div className="user-tile">
            <div className="user-info">
              <h2>{users.fullname}</h2>
              <p>{"Email : " + users.username}</p>
            </div>
            <div>
              <div><RecipesButton users={users}/></div>
            </div>
            <div>
              <div><BlockButton/></div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}



export default UserTileForAdmin;
