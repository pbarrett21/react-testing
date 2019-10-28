import React from 'react';

class ChildToSendMessage extends React.Component {

    render() {
        return(
            <div>
                <strong>Child1: </strong>Message sent to the parent = {this.props.messageToRelay('yeet')}
            </div>
        );
    }
}

export default ChildToSendMessage;
