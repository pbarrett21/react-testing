import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import DropTest from './demos/practice/dropdown';
import Outstagram from './demos/outstagram/outstagram';

// easier to change true to false than copy and paste.
const which = true ? <Outstagram/> : <DropTest/>;

ReactDOM.render(which, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
