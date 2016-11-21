import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from 'Main'
import TodoApp from 'TodoApp'
import Login from 'Login'

export default(
    <Route path="/" component={Main}>
        <Route path='todos' component={TodoApp} />
        <IndexRoute component={Login} />
    </Route>
)


