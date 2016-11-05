import React from 'react'

class Todo extends React.Component {
    constructor(props, context){
        super(props, context)       
    }

    render() {
        var {text,id} = this.props               
        return (
            <div>
            {id}. {text}
            </div>
        )
    }
}

export default Todo