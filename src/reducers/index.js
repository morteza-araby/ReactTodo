import { combineReducers } from 'redux';
import searchTextReducer from './searchTextReducer'
import showCompletedReducer from './showCompletedReducer'
import todosReducer from './todosReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  showCompleted: showCompletedReducer,
  todos: todosReducer,
  auth: authReducer
});

export default rootReducer;
