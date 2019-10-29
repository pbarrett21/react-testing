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
    // initial render using new Date, timer is set to call tick() every second
    // 1 second passes, state is set to new Date, causing unmount to clear timer and a new render
    // didMount begins timer to call tick in 1 second immediately after last render
    // rinse, repeat
}

export default Clock;