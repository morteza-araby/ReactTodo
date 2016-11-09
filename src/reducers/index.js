import { combineReducers } from 'redux';
import searchTextReducer from './searchTextReducer'
import showCompletedReducer from './showCompletedReducer'
import todosReducer from './todosReducer'

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  showCompleted: showCompletedReducer,
  todos: todosReducer
});

export default rootReducer;
