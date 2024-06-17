// import React from 'react';
// import '../css/UserPosts.css';

// const UserPosts = ({ posts }) => {
//   return (
//     <div className="user-posts">
      
//       <h2>Posts ({posts.length})</h2>
//       {posts.map(post => (
//         <div key={post.id} className="post">
//           {post.content}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UserPosts;


import React from 'react';
import '../css/UserPosts.css';


const UserPosts = ({ recipes }) => {
  return (
    <div className="user-posts">
      
      <div>
      <h2>Posts ({recipes.length})</h2>
      <ul>
        {recipes.map(recipes => (
          <li key={recipes.id}>
            <h2>{recipes.title}</h2>
            <p>{"Ingredients : " + recipes.ingredients}</p>
            <div>
        <div>
         <button>Delete</button>
        </div>
        <div>
         <button>Edit</button>
        </div>
      </div>
          </li>
        ))}
      </ul>
      </div>
      
      
    </div>
  );
};

export default UserPosts;
