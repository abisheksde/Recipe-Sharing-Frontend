// import React, { useState, useEffect } from 'react';
// import { likePost, unlikePost, getLikeCount  } from '../service/LikeService';

// const LikeButton = ({ postId, username }) => {
//     const [liked, setLiked] = useState(false);
//     const [likeCount, setLikeCount] = useState(0);

//     useEffect(() => {
//         // Fetch initial like count
//         getLikeCount(postId).then(response => {
//             setLikeCount(response.data);
//         });
//     }, [postId]);

//     const handleLike = () => {
//         if (liked) {
//             unlikePost(postId, username).then(() => {
//                 setLiked(false);
//                 setLikeCount(likeCount - 1);
//             });
//         } else {
//             likePost(postId, username).then(() => {
//                 setLiked(true);
//                 setLikeCount(likeCount + 1);
//             });
//         }
//     };

//     return (
//         <div>
//             <button onClick={handleLike}>{liked ? 'Unlike' : 'Like'}</button>
//             <span>{likeCount} {likeCount === 1 ? 'like' : 'likes'}</span>
//         </div>
//     );
// };

// export default LikeButton;
