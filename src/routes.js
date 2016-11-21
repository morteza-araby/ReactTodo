import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from 'Main'
import TodoApp from 'TodoApp'
import Login from 'Login'
import firebase from 'Src/firebase'

var requireLogin = (nextState, replace, next) => {
  if(!firebase.auth().currentUser) {
    replace('/')
  }
  next()
}

var redirctIfLoggedIn = (nextState, replace, next) => {
  if(firebase.auth().currentUser) {
    replace('/todos')
  }
  next()
}


export default(
    <Route path="/" component={Main}>
        <Route path='todos' component={TodoApp} onEnter={requireLogin} />
        <IndexRoute component={Login} onEnter={redirctIfLoggedIn}/>
    </Route>
)


