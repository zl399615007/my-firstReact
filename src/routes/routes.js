import { Switch, Route ,Router} from 'react-router';
import React,{Component} from 'react'
import About from '../page/about'
import Help from '../page/help'
import HomeCon from '../page/homeCon'
import Next from '../page/next'
import NotFound from '../page/not-found'
import history from '../history';
class Routes extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Router history={history}>
                    <Switch>
                        <Route key='1' exact={true} path="/" component={HomeCon}/>
                        <Route key='2' exact={true} path="/about" component={About}/>
                        <Route key='3' exact={true} path="/help" component={Help}/>
                        <Route key='4' exact={true} path="/next" component={Next}/>
                        <Route component={NotFound}/>
                    </Switch>
            </Router>
        )
    }
}

export default Routes