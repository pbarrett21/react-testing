import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Feed from './feed';
import Profile from './profile';
import Messages from './messages';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Feed />
            </Route>
            <Route path="/user/:username" component={Profile} />
            <Route exact path="/messages">
                <Messages />
            </Route>
        </Switch>
    );
}

export default Main;
