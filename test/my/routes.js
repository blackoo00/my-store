import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Index from './containers/index';
import Example from './containers/example';
import Container from './container'

const routes = (
	<Route path="/" component={Container}>
		<IndexRoute component={Index} />
		<Route path="example" component={Example}/>
	</Route>
)

export default routes