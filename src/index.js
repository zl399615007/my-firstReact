import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Router } from 'react-router';
import history from './history';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
        <Router history={history}>
           <App/>
        </Router>,document.getElementById('root')
);
registerServiceWorker();
