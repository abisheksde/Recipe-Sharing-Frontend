import UserPosts from './UserPosts';
import UserFollowers from './UserFollowers';
import UserFollowing from './UserFollowing';
import '../css/UserAccountPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../../../../service/RecipeService';


const UserAccountPage = () => {
  
  // const user = {
  //   name: "Abishek",
  //   posts: [
  //     { id: 1, content: "Post 1 content" },
  //     { id: 2, content: "Post 2 content" },
  //   ],
  //   followers: [
  //     { id: 1, name: "Follower 1" },
  //     { id: 2, name: "Follower 2" },
  //   ],
  //   following: [
  //     { id: 1, name: "Following 1" },
  //     { id: 2, name: "Following 2" },
  //   ],
  // };
  //

  /// We need to fetch User's Data from the database here
  /// Then should pass the data of user's posts, followers, followings to child component

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
      fetchRecipes()
          .then(response => {
              setRecipes(response.data);
          })
          .catch(error => {
              console.error("There was an error fetching the items!", error);
          });
  }, []);

  return (
    <div className="user-account-page">
      <h1>{}'s Account <Link to="/profileupdate"><FontAwesomeIcon icon={faEdit} /></Link></h1>
      <div className="user-info">
        {/* <UserPosts posts={user.posts} />
        <UserFollowers followers={user.followers} />
        <UserFollowing following={user.following} /> */}

        <UserPosts recipes={recipes} />
        <UserFollowers/>
        <UserFollowing />
      </div>
    </div>
  );
};

export default UserAccountPage;
