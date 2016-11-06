import React from 'react'
import Todo from 'Todo'

class TodoList extends React.Component {
    constructor(props, context){
        super(props, context)       
    }

    render() {
        var {todos} = this.props
        var renderTodos = () => {
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                )
            })
        }
        return (
            <div>
            {renderTodos()}
            </div>
        )
    }
}

export default TodoList