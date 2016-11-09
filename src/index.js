import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,compose } from 'redux'
import ReduxPromise from "redux-promise"
import  {Router, browserHistory, hashHistory } from "react-router"
import reducers from './reducers'
import actions from 'actions'
import routes from './routes'

// Load foundation
//require('foundation-sites/dist/foundation.min.css')
require('./styles/app.scss')

$(document).foundation()


const composeEnhancers = window.devToolsExtension ? window.devToolsExtension() : f => f

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(ReduxPromise)(createStore))
//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)(createCompose)
var store = createStoreWithMiddleware(reducers)

store.subscribe(() => {
  console.log('Current State: ', store.getState())
})

store.dispatch(actions.addTodo('Clean the yard'))
store.dispatch(actions.setSearchText('yard'))
store.dispatch(actions.toggleShowCompleted())


ReactDOM.render(  
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('container'));
