import React from 'react';

const Message = (props) => {
    return (
        <div className="post-container">
            {props.info.user}
        </div>
    );
}

export default Message;
