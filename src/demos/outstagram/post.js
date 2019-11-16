import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

const Post = (props) => {
    const postInfo = props.info;
    return (
        <div>
            <div className="post-container">
                <p>
                    <div className="profile-picture-container">
                        <img src={postInfo.image} alt={postInfo.header} className="profile-picture" />
                    </div>
                    <div className="profile-header">
                    <Link to={`/user/${postInfo.user}`} style={{ textDecoration: 'none' }}>
                        <span className="profile-name">{postInfo.user}</span>
                    </Link>
                    </div>
                </p>
                <img src={postInfo.image} alt={postInfo.header} />
                <Link to={`/user/${postInfo.user}`} style={{ textDecoration: 'none' }}>
                        <span className="profile-name">{postInfo.user}</span>
                </Link>
                <p>{postInfo.text}</p>
            </div>
        </div>
    );
}

export default Post;
