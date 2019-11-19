import React from 'react';
import { Link } from "react-router-dom";
import './style.css';
import Socialbar from './socialbar';

const Post = (props) => {
    const postInfo = props.info;
    return (
        <div>
            <div className="post-container">
                <div>
                    <p className="profile-picture-container">
                        <img src={postInfo.image} alt={postInfo.header} className="profile-picture" />
                    </p>
                    <p className="profile-header">
                        <Link to={`/user/${postInfo.user}`} style={{ textDecoration: 'none' }}>
                            <span className="profile-name">{postInfo.user}</span>
                        </Link>
                    </p>
                </div>
                <img className="content-picture" src={postInfo.image} alt={postInfo.header} />
                <Socialbar />
                <Link to={`/user/${postInfo.user}`} style={{ textDecoration: 'none' }}>
                        <span className="profile-name">{postInfo.user}</span>
                </Link>
                <p className="post-caption">{postInfo.text}</p>
            </div>
        </div>
    );
}

export default Post;
