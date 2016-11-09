import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import ReduxPromise from "redux-promise"
import reducers from 'Reducers'


export var configureStore = (initialState = {}) => {

const composeEnhancers = window.devToolsExtension ? window.devToolsExtension() : f => f
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(ReduxPromise)(createStore))

  var store = createStoreWithMiddleware(reducers, initialState)

  return store;
};
