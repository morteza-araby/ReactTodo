import React from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'

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
            ]
        }
    }
    handleAddTodo(text){
        console.log('new todo: ' + text)
    }
    render() {
        var {todos} = this.state
        return (
            <div>
            <TodoList todos={todos} />       
            <AddTodo onAddTodo={this.handleAddTodo} /> 
            </div>
        )
    }
}

export default TodoApp