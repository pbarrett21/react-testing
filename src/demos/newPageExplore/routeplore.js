import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Explore extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Link to="/about">About</Link>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return (
        <Router>
            <Link to="/">Return</Link>
            <Route path="/">
                <Explore />
            </Route>
        </Router>
    );
}

function Users() {
    return <h2>Users</h2>;
}

export default Explore;