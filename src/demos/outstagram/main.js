import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Feed from './feed';
import Profile from './profile';
import MessageFeed from './messagefeed';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Feed />
            </Route>
            <Route path="/user/:username" component={Profile} />
            <Route exact path="/messages">
                <MessageFeed />
            </Route>
        </Switch>
    );
}

export default Main;
