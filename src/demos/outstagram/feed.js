import React from 'react';
import POSTS from './postsAPI';
import User from './user';

const Feed = () => {
    const userList = [];
    POSTS.forEach((user) => {
        userList.push(
            <User info={user} key={user.text} />
        );
    });
    return (
        <div>
            {userList}
        </div>

    );
}

export default Feed;
