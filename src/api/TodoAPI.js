
var TodoAPI = {
    setTodos(todos){
        if($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos))
            return todos
        }

    },
    getTodos(){
        var stringTodos = localStorage.getItem('todos')
        var todos = []

        try {
            todos = JSON.parse(stringTodos)
        }catch(error){

        }

        return $.isArray(todos) ? todos : []
    },
    filterTodos(todos, showCompleted, searchText){
        var filterTodos = todos

        // filter by showCompleted
        filterTodos = filterTodos.filter((todo) => {
           return !todo.completed || showCompleted
        })
        //filter by searchText

        // Sort todos with non-completed first

        return filterTodos
    }
}

export default TodoAPI