import React from 'react';
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import reducer from './reducers/index';
import {scrollPosition} from './actions/scroll';
import { composeWithDevTools } from 'redux-devtools-extension';//devToolsEnhancer,

const middleware = [ thunk ];

if (process.env.NODE_ENV == 'production') {
  middleware.push(createLogger());
}

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

//固定滚动位置
export const saveScroll = (hash) => {
  let scrollY = document.body.scrollTop;
  store.dispatch(scrollPosition(0,scrollY,hash));
}

export const getScroll = (hash) => {
  let scroll = store.getState().scroll;
  if(scroll.length !=0 && $.type(scroll[hash]) != 'undefined'){
    window.scrollTo(0,scroll[hash]['scrollY'])
  }else{
    //加延迟为了滚动位置显示
    setTimeout(()=>{window.scrollTo(0,0)},200);
  }
}