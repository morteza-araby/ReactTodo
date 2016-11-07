
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
    }
}

export default TodoAPI