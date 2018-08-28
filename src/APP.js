import React, { Component } from 'react';
import {Route,Switch} from 'react-router';
import Home from './page/home'
import Login from './page/login';

import NotFound from './page/not-found'

class App extends Component {
    render() {
        return (
            <div className="App" style={{width:'100%',height:'100%'}}>
                <Switch>
                    <Route key='7'  path="/login" component={Login}/>
                    <Route key='8'  path="/" component={Home}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}


export default App;
