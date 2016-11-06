import React from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import uuid from 'node-uuid'

class TodoApp extends React.Component {
    constructor(props, context){
        super(props, context)
        this.state = {
            todos: [
                {
                    id: uuid(),
                    text: 'walk the dog'
                },
                {
                    id:uuid(),
                    text: 'clean the yard'
                },
                 {
                    id:uuid(),
                    text: 'Leave mail on porch'
                },
                 {
                    id:uuid(),
                    text: 'Play video games'
                }
            ],
            showCompleted: false,
            searchText: ''

        }

        this.handleSearch = this.handleSearch.bind(this)
        this.handleAddTodo = this.handleAddTodo.bind(this)
    }
    handleAddTodo(text){
        this.setState({
            todos: [
                ...this.state.todos, 
                {
                    id: uuid(),
                    text: text
                } 
            ]
        })
    }

    handleSearch(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    }
    render() {
        var {todos} = this.state
        return (
            <div>
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={todos} />       
            <AddTodo onAddTodo={this.handleAddTodo} /> 
            </div>
        )
    }
}

export default TodoApp