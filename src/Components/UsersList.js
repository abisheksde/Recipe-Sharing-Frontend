// src/App.js
import React from 'react';
import UserTile from './UserTile';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchRecipes } from '../service/RecipeService';
import axios from 'axios';

function UsersList() {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    const response = axios.get("http://localhost:8080/api/users/list")
        .then(response => {
            setUsers(response.data);
            console.log("User List "+ user)
        })
        .catch(error => {
            console.error("There was an error fetching the items!", error);
        });
  }, []);


  
  return (
    <div className="App">
      <h1>User Details</h1>
      <UserTile user={user} />
    </div>
  );
}

export default UsersList;
