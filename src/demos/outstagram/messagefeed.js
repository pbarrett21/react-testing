import React from 'react';
import MESSAGES from './messagesAPI';
import Message from './message';

const MessageFeed = () => {
    const messageFeed = [];
    MESSAGES.forEach(message => {
        messageFeed.push(
            <Message info={message} key={message.mostRecentMessage}/>
        );
    });
    return (
        <div>
            {messageFeed}
        </div>
    );
}

export default MessageFeed;
