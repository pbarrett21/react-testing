import React from 'react';
import heartlogo from './../../images/heartlogo.png';
import commentlogo from './../../images/commentlogo.png';
import messageslogo from './../../images/messagesLogo.png';
import savelogo from './../../images/savelogo.png';

const Socialbar = (props) => {
    return (
        <div className="socialbar">
            <div>
                <img src={heartlogo} alt="heart" />
                <img src={commentlogo} alt="comment" />
                <img src={messageslogo} alt="message" />
                <img src={savelogo} className="socialbar-right" alt="save" />
            </div>
        </div>
    );
}

export default Socialbar;
