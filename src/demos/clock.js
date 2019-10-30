import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    // method runs after the component output has been rendered to the DOM
    // componentDidMount is invoked immediately after a component is mounted (inserted into the tree). 
    // Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, 
    // this is a good place to instantiate the network request
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    // tear down the timer
    // componentWillUnmount is invoked immediately before a component is unmounted and destroyed. 
    // Perform any necessary cleanup in this method, such as invalidating timers, 
    // canceling network requests, or cleaning up any subscriptions that were created in componentDidMount()
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                <h1>Current time:</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }

    // What's happening:
    // 1. Constructor is called, setting up date as new Date
    // 2. Initial render displays desired output to DOM
    // 3. After render is complete, componentDidMount begins timer and calls tick after 1 second
    // 4. 1 second passes, state is set to new Date causing rerender
    // rinse, repeat step 4
    // 5. Once finished with component (use dropdown to select different example/close tab/refresh tab) componentWillUnmount is called and stops timer

    // additional info:
    // https://learn.co/lessons/react-component-mounting-and-unmounting
    // https://reactjs.org/docs/state-and-lifecycle.html [exact example]
}

export default Clock;
