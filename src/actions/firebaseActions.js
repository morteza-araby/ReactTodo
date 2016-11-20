import * as types from './actionTypes'
import firebase, { firebaseRef } from 'Src/firebase/'
import moment from 'moment'
import * as appActions from './appActions'

export function  startAddTodoThunk(text) {
        return (dispatch, getState) => {
            var todo = {
                text,
                completed: false,
                createdAt: moment().unix(),
                completedAt: null
            }
            var todoRef = firebaseRef.child('todos').push(todo)
            return todoRef.then(() => {
                dispatch(appActions.addTodo({
                    ...todo,
                    id: todoRef.key
                }))
        })

    }
    }


export function startAddTodo(text) {
    var todo = {
        text,
        completed: false,
        createdAt: moment().unix(),
        completedAt: null
    }
    var todoRef = firebaseRef.child('todos').push(todo)

     return appActions.addTodo(
            {
                ...todo,
            id: todoRef.key
        })


}


export function startAddTodosThunk(){
    return(dispatch, getState) => {
        var todosRef = firebaseRef.child('todos')

        return todosRef.once('value').then((snapshot) => {
            var todos = snapshot.val() || {}
            var parsedTodos = []

            Object.keys(todos).forEach((todoId) => {
                parsedTodos.push({
                    id: todoId,
                    ...todos[todoId]
                })
            })
            dispatch(appActions.addTodos(parsedTodos))
        })
    }
}

export function startToggleTodoThunk(id, completed) {
    return (dispatch, getState) => {
        var todoRef = firebaseRef.child(`todos/${id}`)
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        }

        return todoRef.update(updates).then(() => {
            dispatch(appActions.updateTodo(id, updates))
        })
    }
}

export function startToggleTodo(id, completed) {
        var todoRef = firebaseRef.child(`todos/${id}`)
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        }

        todoRef.update(updates)
        
        return appActions.updateTodo(id, updates) 
    
}


