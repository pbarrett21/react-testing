import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React from 'react';
import InheritClassAndPassProps from './../practice/inheritClassAndPassProps';
import SeparationOfClassesParent from '../SeparationOfClasses/separationOfClassesParent';
import Fight from './../practice/objectProps';
import StateCar from './../practice/stateAndSetState';
import ParentComponent from '../dataChildtoParent/parentComponentReceiver';
import ParentToPassMessage from "../dataBetweenSiblings/parent";
import Clock from './../practice/clock';
import WelcomeDialog from '../compositionVsInheritance/compositionVsInheritance';
import SplitPaneApp from '../multipleHoles/sidebar';
import DisplayLinks from '../../usefulLinksAndInfo';
import Toggle from './../practice/handlingEvents';
import LoginControl from './../practice/conditionalRender';
import ListsAndKeys from './listsAndKeys';
import NameForm from './../practice/formsAndControlledComponents';
import Calculator from './liftingState';
import SignUpDialog from './../practice/specialization';
import FilterableProductTable from './../practice/thinkingInReact';
import Feed from '../socialCard/card';
import ParentHelloOrGoodbye from '../newPageExplore/redirectToNewPageExploration';
import SocialCard from '../newPageExplore/attempt2';
import Explore from '../newPageExplore/routeplore';
import Outstagram from '../outstagram/outstagram';

const separationOfClassesExample = <SeparationOfClassesParent parentName='Bob' />;
const examples = [
    { desc: 'Useful Links', example: <DisplayLinks /> },
    { desc: 'Outstagram', example: <Outstagram /> },
    { desc: 'Thinking In React Example', example: <FilterableProductTable /> },
    { desc: 'Social Feed Project', example: <Feed /> },
    { desc: 'HelloOrGoodbye', example: <ParentHelloOrGoodbye /> },
    { desc: 'Social card link change view', example: <SocialCard /> },
    { desc: 'Explore', example: <Explore /> },
    { desc: 'Separation of Classes, Passing from Parent to Child using Props', example: separationOfClassesExample },
    { desc: 'Inherit Class and Pass Props', example: <InheritClassAndPassProps /> },
    { desc: 'Object as Props', example: <Fight /> },
    { desc: 'Specialization', example: <SignUpDialog /> },
    { desc: 'Lifting State Temperature', example: <Calculator /> },
    { desc: 'Using State and Reusing and Adding to Components', example: <StateCar /> },
    { desc: 'Passing data from Child to Parent using Callback', example: <ParentComponent /> },
    { desc: 'Passing data from Sibling to Sibling through the Parent', example: <ParentToPassMessage /> },
    { desc: 'Clock LifeCycle Example Updating Render', example: <Clock /> },
    { desc: 'Composition vs Inheritance', example: <WelcomeDialog /> },
    { desc: 'Multiple Props', example: <SplitPaneApp /> },
    { desc: 'Conditional Rendering', example: <LoginControl /> },
    { desc: 'Handling events', example: <Toggle /> },
    { desc: 'Lists and Keys', example: <ListsAndKeys /> },
    { desc: 'Forms and Controlled Components', example: <NameForm /> }
];
const options = examples.map(x => x.desc);

class DropTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'Useful Links'
        }
    }

    _onSelect = option => {
        this.setState({ selected: option });
    };

    static displayResult(result) {
        if (result !== '') {
            let toDisplay = 'test';
            for (const arr of examples) {
                if (arr.desc === result) {
                    toDisplay = arr.example;
                }
            }
            return (
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
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder='Select an example' />
                {DropTest.displayResult(result)}
            </div>
        )
    }
}

export default DropTest;
