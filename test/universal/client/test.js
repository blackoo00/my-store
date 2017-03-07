import React from 'react'
import { render } from 'react-dom'
const rootElement = document.getElementById('app')
const preloadedState = window.__PRELOADED_STATE__
console.log(preloadedState)
render(
	<div>123</div>,
  rootElement
)
