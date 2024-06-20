import React, { useState } from 'react';
import axios from 'axios';

const FollowButton = ({ followerId, followeeId }) => {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollow = async () => {
        try {
            if (isFollowing) {
                await axios.post('/api/unfollow', { followerId, followeeId });
                setIsFollowing(false);
            } else {
                await axios.post('/api/follow', { followerId, followeeId });
                setIsFollowing(true);
            }
        } catch (error) {
            console.error("Error following/unfollowing user", error);
        }
    };

    return (
        <button onClick={handleFollow}>
            {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
    );
};

export default FollowButton;
