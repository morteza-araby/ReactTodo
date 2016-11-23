import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory, hashHistory } from "react-router"
import * as  actions from 'Actions'
import routes from './routes'
import { configureStore } from 'configureStore'
import TodoAPI from 'TodoAPI'
import firebase from 'Src/firebase'

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid))
    store.dispatch(actions.listentodosThunk())
    browserHistory.push('/todos')
  } else {
    store.dispatch(actions.logout())
    browserHistory.push('/')
  }
})

// Load foundation
//require('foundation-sites/dist/foundation.min.css')
require('./styles/app.scss')
$(document).foundation()

var store = configureStore()
store.subscribe(() => {
  var state = store.getState()
  console.log('Current State: ', state)
  //    TodoAPI.setTodos(state.todos)
})





ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('container'));
