import React from 'react';

class ChildToSendMessage extends React.Component {

    showMessageAndPass = msg => {
        this.props.messageToRelay(msg);
        return (
            <span>{msg}</span>
        );
    };

    render() {
        return(
            <div>
                <strong>Child1: </strong>Message sent to the parent = {this.showMessageAndPass('yeet')}
            </div>
        );
    }
}

export default ChildToSendMessage;
