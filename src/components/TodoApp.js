import React from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'

class TodoApp extends React.Component {
    constructor(props, context){
        super(props, context)
        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'walk the dog'
                },
                {
                    id:2,
                    text: 'clean the yard'
                },
                 {
                    id:3,
                    text: 'Leave mail on porch'
                },
                 {
                    id:4,
                    text: 'Play video games'
                }
            ],
            showCompleted: false,
            searchText: ''

        }

        this.handleSearch = this.handleSearch.bind(this)
        this.handleAddTodo = this.handleSearch.bind(this)
    }
    handleAddTodo(text){
        console.log('new todo: ' + text)
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