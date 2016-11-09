import { combineReducers } from 'redux';
import searchTextReducer from './searchTextReducer'
import showCompletedReducer from './showCompletedReducer'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  showCompleted: showCompletedReducer,
  todo: todoReducer
});

export default rootReducer;
