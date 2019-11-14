import React from 'react';
import { Link } from "react-router-dom";

const User = (props) => {
    const postInfo = props.info;
    return (
        <div>
            <div className="container">
                    <b><Link to={`/user/${postInfo.user}`}>{postInfo.user}</Link> - {postInfo.header}</b>
                    <img src={postInfo.image} alt={postInfo.header} />
                    <p>{postInfo.text}</p>
                    <hr></hr>
                </div>
        </div>
    );
}

export default User;
