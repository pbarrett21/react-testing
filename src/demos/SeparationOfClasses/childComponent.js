import React from "react";

class ChildComponent extends React.Component {
    render() {
        return <p>This is the child, its name is {this.props.childName}.</p>
    }
}

export default ChildComponent;
