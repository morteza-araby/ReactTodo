import React from 'react'

class Todo extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        var {id, text, completed} = this.props
        return (
            <div onClick={() => {
                this.props.onToggle(id)
            } }>
                <input type='checkbox' checked={completed} />
                {text}
            </div>
        )
    }
}

export default Todo