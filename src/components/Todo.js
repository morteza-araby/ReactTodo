import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import * as  actions from 'Actions'

export class Todo extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        var {id, text, completed, createdAt, completedAt, dispatch} = this.props
        var todoClassName = completed ? 'todo todo-completed' : 'todo'
        var renderDate = () => {
            var message = 'Created '
            var timestamp = createdAt

            if (completed) {
                message = 'Completed '
                timestamp = completedAt
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm A')
        }

        return (
            <div className={todoClassName} onClick={() => {
                //this.props.onToggle(id)
                dispatch(actions.startToggleTodoThunk(id, !completed))
            } }>
                <div>
                    <input type='checkbox' checked={completed} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className='todo__subtext'>{renderDate()}</p>
                </div>
            </div>
        )
    }
}

export default connect()(Todo)