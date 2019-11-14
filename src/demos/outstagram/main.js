import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Feed from './feed';
import Profile from './profile';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Feed />
            </Route>
            <Route path="/user/:username" component={Profile} />
        </Switch>
    );
}

export default Main;
