import uuid from 'node-uuid'
import moment from 'moment'
import * as types from 'actionTypes'

export default function todoReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state,
      action.todo
      ]
    case types.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          var nextCompleted = !todo.completed
          return {
                     ...todo,
        completed: nextCompleted,
        completedAt: nextCompleted ? moment().unix() : undefined
                 }
} else {
  return todo
}
         })

         case types.ADD_TODOS:
return [
  ...state,
  ...action.todos
]

 
         case types.UPDATE_TODO:
return state.map((todo) => {
  if (todo.id === action.id) {
    return {
                     ...todo,            //Using two spread operator, second operator will override the first one
  ...action.updates   // properties which are in todo and not in action.updates, will be remain
                 }
             } else{
    return todo
  }
         })

        case types.UPDATE_TODOSX:
var newState = []
for (var i = 0; i < state.length; i++) {
  for (var j = 0; j < action.todos.length; j++) {
    if (state[i] === action.todos[j]) {
      newState.push({...state[i], ...action.todos[j]})
  }
}
        }
return [
  newState
]

         
          case types.UPDATE_TODOS:
return [
  ...action.todos
]

         
        default:
return state
    }
}