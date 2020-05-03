import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import Main from './main';
import './assets/css/app.css';

const Hot = hot(Main);
const root = document.querySelector('#root');

ReactDOM.render(<Hot />, root);
