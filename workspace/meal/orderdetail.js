import React from 'react';
import { render } from 'react-dom';


import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';//devToolsEnhancer,

import '../common/css/reset.css';
import '../common/css/style.scss';
import './common/css/iconfont.css';

import Order from './order/controller/';
import orderReducer from './order/reducers/index';

import FastClick from 'fastclick';
FastClick.attach(document.body);

export const store = createStore(
  orderReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

render(
	<Provider store={store}>
		<Order/>
	</Provider>,
	document.getElementById('wrapper')
)
