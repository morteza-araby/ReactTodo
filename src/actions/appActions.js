import * as types from './actionTypes'

export function setSearchText(searchText) {
    return {
        type: types.SET_SEARCH_TEXT,
        searchText
    }
}

export function addTodo(todo) {
    return {
        type: types.ADD_TODO,
        todo
    }
}

export function addTodos(todos) {
    return {
        type: types.ADD_TODOS,
        todos
    }
}

export function toggleShowCompleted() {
    return {
        type: types.TOGGLE_SHOW_COMPLETED
    }
}

export function toggleTodo(id) {
    return {
        type: types.TOGGLE_TODO,
        id
    }
}

export function updateTodo(id, updates) {
    return {
        type: types.UPDATE_TODO,
        id,
        updates
    }

}

export function updateTodos(todos) {
    return {
        type: types.UPDATE_TODOS,
        todos        
    }

}
