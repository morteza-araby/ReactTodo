import React from 'react'
import { connect } from 'react-redux'
import Todo from 'Todo'

export class TodoList extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        var {todos} = this.props
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className='container__message'>Nothing to Do</p>
                )
            }
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} />
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

export default connect(
    (state) => {
        return {
            todos: state.todos
        }
    }
)(TodoList)