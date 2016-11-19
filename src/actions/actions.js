import firebase, { firebaseRef } from 'Src/firebase/'
import moment from 'moment'

var actions = {
    setSearchText(searchText) {
        return {
            type: 'SET_SEARCH_TEXT',
            searchText
        }
    },

    addTodo(todo) {
        return {
            type: 'ADD_TODO',
            todo
        }
    },

    startAddTodo(text) {
        var todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        }
        var todoRef = firebaseRef.child('todos').push(todo)

        return this.addTodo(
            {
                ...todo,
            id: todoRef.key
        })

},

    startAddTodoThunk(text) {
        return (dispatch, getState) => {
            var todo = {
                text,
                completed: false,
                createdAt: moment().unix(),
                completedAt: null
            }
            var todoRef = firebaseRef.child('todos').push(todo)
            return todoRef.then(() => {
                dispatch(this.addTodo({
                    ...todo,
                    id: todoRef.key
                }))
        })

    }
    },



addTodos(todos) {
    return {
        type: 'ADD_TODOS',
        todos
    }
},

toggleShowCompleted() {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
},

toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}
}

export default actions