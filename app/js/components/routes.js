import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Example from './Example';
import StoreApp from './StoreApp';

module.exports = (
  <Route path="/" component={StoreApp}/>,
  <Route path="example" component={Example}/>,
)
