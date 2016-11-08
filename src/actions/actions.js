var actions = {
    setSearchText(searchText) {
        return {
            type: 'SET_SEARCH_TEXT',
            searchText
        }
    },

    addTodo(text) {
        return {
            type: 'ADD_TODO',
            text
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