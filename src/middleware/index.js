import logger from './logger'
import thunk from 'redux-thunk'
import { applyMiddleware, compose } from 'redux'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default composeEnhancer(applyMiddleware(thunk, logger))
