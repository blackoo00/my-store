import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

const preloadedState = window.__PRELOADED_STATE__
const rootElement = document.getElementById('app')

render(
  <div>123</div>,
  rootElement
)
