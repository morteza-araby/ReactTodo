
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

        // Filter by showCompleted
        filterTodos = filterTodos.filter((todo) => {
           return !todo.completed || showCompleted
        })
        // Filter by searchText
        filterTodos = filterTodos.filter((todo) =>{
            var text = todo.text.toLowerCase()

            return searchText.length === 0 || text.indexOf(searchText) > -1
        })

        
        //sort will change the existing array, so the filterTodos will be changed be sort.

        // Sort todos with non-completed first
        // return -1 = a should come before b
        // return 1 = a should come after b
        // return 0 = a equal to b
        filterTodos.sort((a, b) => {
            if(a.completed === false && b.completed === true){
                return -1
            } else if (a.completed && !b.completed){
                return 1
            } else{
                return 0
            }
        })

        return filterTodos
    }
}

export default TodoAPI