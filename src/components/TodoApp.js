import React from 'react'
import uuid from 'node-uuid'

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import TodoAPI from 'TodoAPI'

class TodoApp extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            todos: TodoAPI.getTodos(),
            showCompleted: false,
            searchText: ''

        }

        this.handleSearch = this.handleSearch.bind(this)
        this.handleAddTodo = this.handleAddTodo.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }
     
     componentDidUpdate() {
        TodoAPI.setTodos(this.state.todos)
    }
    
    handleAddTodo(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        })
    }

    handleSearch(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    }

    handleToggle(id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        this.setState({
            todos: updatedTodos
        })
    }
    render() {
        var {todos, showCompleted, searchText} = this.state
        var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={filterTodos} onToggle={this.handleToggle} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
}

export default TodoApp