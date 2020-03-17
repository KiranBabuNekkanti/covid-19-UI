import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from '../components/NotFound';
import App from '../components/App';
class AppRouter extends Component {
    render() { 
        return (
    <Router >
        <Switch>
        <Route exact path='/' component={App}/>
        <Route component={NotFound} />
      </Switch>
    </Router>
         );
    }
}
 
export default AppRouter;