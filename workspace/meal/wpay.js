import React from 'react';
import { render } from 'react-dom';

import '../common/css/reset.css';
import '../common/css/style.scss';
import './common/css/style.css';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Wpay from './wpay/controller/wpay';
import wpayReducer from './wpay/reducers/';

import FastClick from 'fastclick';
FastClick.attach(document.body);

export const store = createStore(
  wpayReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

render(
	<Provider store={store}>
		<Wpay/>
	</Provider>,
	document.getElementById('wrapper')
)
