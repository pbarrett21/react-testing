import React from 'react';
import ChildToSendMessage from './child1';
import ChildToReceiveMessage from './child2';

class ParentToPassMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    messageCallback = data => {
        return (<span>{data}</span>);
    };

    componentDidMount() {
        
    }

    render() {
        return(
            <div>
                <ChildToSendMessage messageToRelay={this.messageCallback}/>
                <strong>Parent: </strong>Message received and sent to Child 2 = {this.state.message}
                <ChildToReceiveMessage messageToSendToChild={this.state.message}/>
            </div>
        );
    }
}

export default ParentToPassMessage;
