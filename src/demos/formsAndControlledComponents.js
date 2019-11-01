import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleSubmit = event => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type='text' value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <input type='submit' value='Submit'></input>
            </form>
        );
    }
}

export default NameForm;
