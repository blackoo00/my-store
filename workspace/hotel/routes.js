import React from 'react';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import Container from './container';
import Settle from './settle/controller/';
import Home from './home/controller/';
import Pay from './pay/controller/';

const Routes = () => (
    <Router history = {hashHistory}>
        <Route path = "/" component = {Container}>
            <IndexRoute component = {Home} />
            <Route path = 'settle' component = {Settle} />
            <Route path = 'pay' component = {Pay} />
        </Route>
    </Router>
)

export default Routes
