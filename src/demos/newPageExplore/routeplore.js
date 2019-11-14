import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Explore = () => {
    return (
        <div>
            <Router>
                <Content />
            </Router>
        </div>
    );
}

const Content = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Users />
            </Route>
            <Route path="/feed">
                <Users />
            </Route>
            <Route path="/profile">
                <h1>test2</h1>
            </Route>
            <Route path="/user/:number" component={Profile} />
        </Switch>
    );
}

const Users = () => {
    const userList = [];
    POSTS.forEach((user) => {
        userList.push(
            <User info={user} key={user.id} />
        );
    });
    return (
        <div>
            {userList}
        </div>

    );
}

const User = (props) => {
    return (
        <div>
            <p><Link to={`/user/${props.info.id}`}>{props.info.user}</Link></p>
            <hr></hr>
        </div>
    );
}

const Profile = (props) => {
    const id = parseInt(props.match.params.number);
    const user = POSTS.find(post => post.id === id);
    return (
        <div>
            <p>{user.user}'s Profile</p>
            <Link to="/">Go Back</Link>
        </div>
    );
}

const POSTS = [
    { user: 'Fastturtle4', id: 0 },
    { user: 'Paul.barrett21', id: 1 },
    { user: 'Yeetbro', id: 2 },
    { user: 'Stonks', id: 3 }
];

export default Explore;
