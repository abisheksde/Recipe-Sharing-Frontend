// src/App.js
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import UserTileForAdmin from './UserTileForAdmin';

function UsersListForAdmin() {
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
      <UserTileForAdmin user={user} />
    </div>
  );
}

export default UsersListForAdmin;
