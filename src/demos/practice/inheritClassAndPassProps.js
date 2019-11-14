import React from 'react';
import './../../App.css';

// NEWBIE MISTAKE
// THIS IS BAD PRACTICE
// At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.
// https://reactjs.org/docs/composition-vs-inheritance.html

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
