import { combineReducers } from 'redux';
import searchTextReducer from './searchTextReducer'
import showCompletedReducer from './showCompletedReducer'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
  searchTextReducer,
  showCompletedReducer,
  todoReducer
});

export default rootReducer;
