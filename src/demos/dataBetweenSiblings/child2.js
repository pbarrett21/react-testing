import React from 'react';

class ChildToReceiveMessage extends React.Component {

    render() {
        return(
            <div>
                <strong>Child2: </strong>Message received from Parent = {this.props.messageToSendToChild}
            </div>
        );
    }
}

export default ChildToReceiveMessage;
