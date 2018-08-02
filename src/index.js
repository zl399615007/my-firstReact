import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import history from './history';
import App from './APP'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './redux/store'
ReactDOM.render(
    <Provider store={store}>
        <HashRouter history={history}>
           <App/>
        </HashRouter>
    </Provider>
        ,document.getElementById('root')
);
registerServiceWorker();
