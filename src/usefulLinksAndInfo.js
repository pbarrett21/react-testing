import React from 'react';
import './index.css';

function Links(props) {
    return (
        <div className="Links">
            {props.children}
        </div>
    );
}

function CreateLinks(name, link) {
    return (
        <div><a href={link} target="_blank"><h2>{name}</h2></a></div>
    );
}

function DisplayLinks() {
    return (
        <Links>
            {CreateLinks('Stateful vs Stateless', 'https://medium.com/@cgcrutch18/stateful-vs-stateless-react-components-13f647f7fc4')}
            {CreateLinks('Passing Data between Components', 'https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17')}
            {CreateLinks('Redux 3 Principles', 'https://redux.js.org/introduction/three-principles')}
            {CreateLinks('Mounting and Unmounting', 'https://learn.co/lessons/react-component-mounting-and-unmounting')}
            {CreateLinks('React Docs', 'https://reactjs.org/docs/state-and-lifecycle.html')}
        </Links>
    );
}

export default DisplayLinks;