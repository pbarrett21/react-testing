import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import DropTest from './demos/dropdown';
import Explore from './demos/newPageExplore/routeplore';

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<BrowserRouter><Explore/></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
