import React from 'react';

class ChildToSendMessage extends React.Component {

    componentDidMount() {
        this.props.messageToRelay('yeet');
    }

    render() {
        return(
            <div>
                <strong>Child1: </strong>Message sent to the parent = {this.props.message}
            </div>
        );
    }
}

export default ChildToSendMessage;
