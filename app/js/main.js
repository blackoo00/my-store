import React from 'react';
import { render } from 'react-dom';
import { useScroll } from 'react-router-scroll';
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import reducer from './reducers/index';
import { getAllProducts } from './actions/carts';
import Routes from './routes';
import '../css/style.scss';
import {scrollPosition} from './actions/scroll';


const middleware = [ thunk ];

if (process.env.NODE_ENV == 'production') {
  middleware.push(createLogger());
}
const store = createStore(
  reducer,
  applyMiddleware(thunk,createLogger())
)

const saveScroll = (hash) => {
  let scrollY = document.body.scrollTop;
  store.dispatch(scrollPosition(0,scrollY,hash));
}

const getScroll = (hash) => {
  let scroll = store.getState().scroll;
  if(scroll.length !=0 && $.type(scroll[hash]) != 'undefined'){
    window.scrollTo(0,scroll[hash]['scrollY'])
  }else{
    //加延迟为了滚动位置显示
    setTimeout(()=>{window.scrollTo(0,0)},200);
  }
}
render(
  <Provider store={store}>
    <Routes 
      saveScroll = {saveScroll}
      getScroll = {getScroll}
    />
  </Provider>,
  document.getElementById('wrapper')
)