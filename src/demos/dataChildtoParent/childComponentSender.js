import React from "react";

class ChildComponent extends React.Component {

    render() {
        return (
            <div>
                Passing data from child to parent, message received = {this.props.callbackFromParent('yeet')}.
            </div>
        );
    }
}

export default ChildComponent;
