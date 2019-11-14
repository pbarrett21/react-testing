import React from 'react';
import './../compositionVsInheritance/styles.css';

// Sometimes we think about components as being “special cases” of other components. 
// For example, we might say that a WelcomeDialog is a special case of Dialog.
// In React, this is also achieved by composition, where a more “specific” component renders a more “generic” one and configures it with props

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = { login: '' };
    }

    render() {
        return (
            <Dialog title="Mars Exploration Program"
                message="How should we refer to you?">
                <input value={this.state.login}
                    onChange={this.handleChange} />

                <button onClick={this.handleSignUp}>
                    Sign Me Up!
          </button>
            </Dialog>
        );
    }

    handleChange(e) {
        this.setState({ login: e.target.value });
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
}

export default SignUpDialog;
