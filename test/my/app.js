import React from 'react';
import { render } from 'react-dom';
import routes from './routes';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Index from './containers/index';
import Example from './containers/example';
import Container from './container'

render(
	<Router history={hashHistory}>
  		{routes}
  	</Router>,
	document.getElementById('wrapper')
)