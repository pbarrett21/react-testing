import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React from "react";
import InheritClassAndPassProps from './inheritClassAndPassProps';
import SeparationOfClassesParent from './SeparationOfClasses/separationOfClassesParent';
import Fight from "./objectProps";

const separationOfClassesExample = <SeparationOfClassesParent parentName="Bob" />;
const inheritExample = <InheritClassAndPassProps />;
const objectPropExample = <Fight/>;
const examples = [
    {desc: 'Separation of Classes', example: separationOfClassesExample},
    {desc: 'Inherit Class and Pass Props', example: inheritExample},
    {desc: 'Object as Props', example: objectPropExample}
];
const options = examples.map(x => x.desc);

class DropTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ''
        }
    }

    _onSelect = option => {
        this.setState({selected: option});
    };

    displayResult(result) {
        if (result !== '') {
            let toDisplay = 'test';
            for (const arr of examples) {
                if(arr.desc === result) {
                    toDisplay = arr.example;
                }
            }
            return(
                <div>
                    {toDisplay}
                </div>
            );
        }
    }

    render() {
        const defaultOption = this.state.selected;
        const result = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label;
        return (
            <div>
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an example"/>
                {this.displayResult(result)}
            </div>
        )
    }
}

export default DropTest;
