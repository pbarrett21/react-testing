import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React from 'react';
import InheritClassAndPassProps from './inheritClassAndPassProps';
import SeparationOfClassesParent from './SeparationOfClasses/separationOfClassesParent';
import Fight from './objectProps';
import StateCar from './stateAndSetState';
import ParentComponent from './dataChildtoParent/parentComponentReceiver';
import ParentToPassMessage from "./dataBetweenSiblings/parent";

const separationOfClassesExample = <SeparationOfClassesParent parentName='Bob' />;
const inheritExample = <InheritClassAndPassProps />;
const objectPropExample = <Fight/>;
const examples = [
    {desc: 'Separation of Classes, Passing from Parent to Child using Props', example: separationOfClassesExample},
    {desc: 'Inherit Class and Pass Props', example: inheritExample},
    {desc: 'Object as Props', example: objectPropExample},
    {desc: 'Using State and Reusing and Adding to Components', example: <StateCar/>},
    {desc: 'Passing data from Child to Parent using Callback', example: <ParentComponent/>},
    {desc: 'Passing data from Sibling to Sibling through the Parent', example: <ParentToPassMessage/>}
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

    static displayResult(result) {
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
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder='Select an example'/>
                {DropTest.displayResult(result)}
            </div>
        )
    }
}

export default DropTest;
