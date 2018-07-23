import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import history from './history';
import Home from './page/home'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
        <Router history={history}>
           <Home/>
        </Router>,document.getElementById('root')
);
registerServiceWorker();
