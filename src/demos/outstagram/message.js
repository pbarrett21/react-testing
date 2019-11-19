import React from 'react';

const Message = (props) => {
    return (
        <div className="post-container">
            <b>{props.info.user}</b>
            <div className="recent-message">
                <h6>{props.info.mostRecentMessage}</h6>
            </div>
        </div>
    );
}

export default Message;
