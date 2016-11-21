import React from 'react'
import {connect} from 'react-redux'

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import * as actions from 'Actions'

export class TodoApp extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.onLogout = this.onLogout.bind(this)
    }

    onLogout(e){
        var {dispatch} = this.props
        e.preventDefault()
        dispatch(actions.startLogout())
    }

    render() {
        return (
            <div>
            <div className='page-actions'>
                <a href='/' onClick={this.onLogout}>Logout</a>
            </div>
            <div className='container'>
                <TodoSearch />
                <TodoList />
                <AddTodo />
            </div>
            </div>
        )
    }
}

export default connect()(TodoApp)