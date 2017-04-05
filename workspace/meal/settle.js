import React from 'react';
import { render } from 'react-dom';

import '../common/css/reset.css';
import '../common/css/style.scss';
import './common/css/style.css';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Settle from './settle/controller/settle';
import settleReducer from './settle/reducers/';

import FastClick from 'fastclick';
FastClick.attach(document.body);

export const store = createStore(
  settleReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

render(
	<Provider store={store}>
		<Settle/>
	</Provider>,
	document.getElementById('wrapper')
)
