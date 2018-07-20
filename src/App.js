import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './routes/routes';
import NotFound from './page/not-found';

/*import './App.css';*/

class App extends React.Component {
  render() {
    return (
        <Switch>
            {routes.map((route, i) => <Route key={i} exact={!!route.exact} path={route.path} component={route.component} />)}
            <Route component={NotFound} />
        </Switch>
    );
  }
}


export default App;

