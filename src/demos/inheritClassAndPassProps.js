import React from 'react';
import './../App.css';

class Car extends React.Component {
    render() {
        return <span>I drive a {this.props.car}</span>
    }
}

class Model extends Car {
    render() {
        return <span><Car car={this.props.car}/>, it has a {this.props.feature}</span>
    }
}

function InheritClassAndPassProps() {
    return (
        <div className="App">
            <h2>
                <Model car="Dodge Journey" feature="steering wheel"/>
            </h2>
        </div>
    );
}

export default InheritClassAndPassProps;
