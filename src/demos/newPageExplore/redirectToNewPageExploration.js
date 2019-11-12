import React from 'react';

function HelloComponent(props) {
    return <h1>Hello!</h1>;
}

function GoodbyeComponent(props) {
    return <h1>Goodbye!</h1>;
}

class HelloOrGoodbye extends React.Component {

    render() {
        const Display = this.props.hello ? <HelloComponent/> : <GoodbyeComponent/>;
        return (
            <div>
                {Display}
            </div>
        );
    }
}

class ParentHelloOrGoodbye extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hello: true};
    }

    changeHello = () => {
        this.setState((prevState) => ({hello: !prevState.hello}));
    }

    render() {
        return (
            <div>
                <button onClick={this.changeHello}>Hello</button>
                <button onClick={this.changeHello}>Goodbye</button>
                <br></br>
                <HelloOrGoodbye hello={this.state.hello} />
            </div>
        );
    }
}

export default ParentHelloOrGoodbye;