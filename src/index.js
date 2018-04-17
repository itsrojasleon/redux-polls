import React from 'react'
import ReactDOM from 'react-dom'

import './css/index.css'

import App from './containers/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import middleware from './middleware'

const store = createStore(reducer, middleware)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
