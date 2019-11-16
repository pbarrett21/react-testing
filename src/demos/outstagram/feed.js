import React from 'react';
import POSTS from './postsAPI';
import Post from './post';

const Feed = () => {
    const userList = [];
    POSTS.forEach((user) => {
        userList.push(
            <Post info={user} key={user.text} />
        );
    });
    return (
        <div>
            {userList}
        </div>

    );
}

export default Feed;
