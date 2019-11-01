import React from 'react';
// second form of setState() that accepts a function rather than an object. That function will receive the previous state
// as the first argument, and the props at the time the update is applied as the second argument

// this.setState((prevState, currentProps) => ({
//     counter: prevState.counter + currentProps.increment
// }));

// OR

// this.setState((prevState) => ({
//     counter: prevState.counter
// }));

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }

    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;