import React from 'react';
import POSTS from './postsAPI';

const Profile = (props) => {
    const username = props.match.params.username;
    const user = POSTS.find(post => post.user === username);
    return (
        <div>
            <p>{user.user}'s Profile</p>
        </div>
    );
}

export default Profile;
