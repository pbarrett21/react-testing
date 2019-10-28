import React from "react";
import ChildComponent from './childComponentSender';
import './../../App.css';

// Strategy:
// define a callback in parent which takes in needed data as parameter
// pass the callback as prop to child
// call the callback in child as this.props.callback and pass data in argument
class ParentComponent extends React.Component {

    parentCallback = data => {
        return (<span>{data}</span>);
    };

    render() {
        return (
            <div className='App'>
                <ChildComponent callbackFromParent={this.parentCallback}/>
            </div>
        );
    }
}

export default ParentComponent;
