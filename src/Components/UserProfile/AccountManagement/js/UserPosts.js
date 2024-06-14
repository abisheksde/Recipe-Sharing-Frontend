import React from 'react';
import '../css/UserPosts.css';

const UserPosts = ({ posts }) => {
  return (
    <div className="user-posts">
      
      <h2>Posts ({posts.length})</h2>
      {posts.map(post => (
        <div key={post.id} className="post">
          {post.content}
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
