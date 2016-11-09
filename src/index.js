import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import  {Router, browserHistory, hashHistory } from "react-router"
import reducers from './reducers'
import actions from 'actions'
import routes from './routes'
import {configureStore} from 'configureStore'
// Load foundation
//require('foundation-sites/dist/foundation.min.css')
require('./styles/app.scss')

$(document).foundation()

//var store = require('configureStore').configure()
var store = configureStore()
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
