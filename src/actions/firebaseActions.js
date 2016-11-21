import * as types from './actionTypes'
import firebase, { firebaseRef, githubProvider } from 'Src/firebase/'
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


export function listentodosThunk(){
    return(dispatch, getState) => {
        var todosRef = firebaseRef.child('todos')

        return todosRef.on('value',(snapshot) => {
            var todos = snapshot.val() || {}
            var parsedTodos = []
            snapshot.forEach((itemSnap) => {
                var item = itemSnap.val()
                item.id = itemSnap.key
                parsedTodos.push(item)
            })

            // Object.keys(todos).forEach((todoId) => {
            //     parsedTodos.push({
            //         id: todoId,
            //         ...todos[todoId]
            //     })
            // })

            dispatch(appActions.updateTodos(parsedTodos))
        })
    }
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

export function startLogin(){
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(githubProvider).then((result) => {
            console.log('Auth Worked', result)
        }, (error) => {
            console.log('Unable to auth ', error)
        } )
    }
}

export function startLogout() {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            console.log('Logged out!')
        })
    }
}


