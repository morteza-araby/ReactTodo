import React from 'react'
import { connect } from 'react-redux'
import Todo from 'Todo'
import TodoAPI from 'TodoAPI'

export class TodoList extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    var {todos, showCompleted, searchText} = this.props
    var renderTodos = () => {
      var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
      if (filterTodos.length === 0) {
        return (
          <p className='container__message'>Nothing to Do</p>
        )
      }
      return filterTodos.map((todo) => {
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
      todos: state.todos,
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoList)