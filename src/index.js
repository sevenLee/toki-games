import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './style/app.css';
import Root from './components/Root';
import {store} from './store/index'

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
);
