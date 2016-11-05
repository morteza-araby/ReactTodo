import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from 'Main'
import TodoApp from 'TodoApp'

export default(
    <Route path="/" component={Main}>
        <IndexRoute component={TodoApp} />
    </Route>
)


