import React from 'react';
import UserPosts from './UserPosts';
import UserFollowers from './UserFollowers';
import UserFollowing from './UserFollowing';
import '../css/UserAccountPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserAccountPage = () => {
  
  const user = {
    name: "Abishek",
    posts: [
      { id: 1, content: "Post 1 content" },
      { id: 2, content: "Post 2 content" },
    ],
    followers: [
      { id: 1, name: "Follower 1" },
      { id: 2, name: "Follower 2" },
    ],
    following: [
      { id: 1, name: "Following 1" },
      { id: 2, name: "Following 2" },
    ],
  };

  return (
    <div className="user-account-page">
      <h1>{user.name}'s Account <Link to="/profileupdate"><FontAwesomeIcon icon={faEdit} /></Link></h1>
      <div className="user-info">
        <UserPosts posts={user.posts} />
        <UserFollowers followers={user.followers} />
        <UserFollowing following={user.following} />
      </div>
    </div>
  );
};

export default UserAccountPage;
