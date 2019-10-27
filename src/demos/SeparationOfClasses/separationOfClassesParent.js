import React from "react";
import ChildComponent from './childComponent';
import './../../App.css'

class SeparationOfClassesParent extends React.Component {
    render() {
        const childName = 'Little Johnny';

        return <div className="App">
            <ChildComponent childName={childName}/>
            <p>This is the parent, its name is {this.props.parentName}.</p>
        </div>
    }
}

export default SeparationOfClassesParent;
