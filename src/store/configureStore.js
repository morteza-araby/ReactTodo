import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import ReduxPromise from "redux-promise"
import thunk from 'redux-thunk'
import reducers from 'Reducers'


// export var configureStore = (initialState = {}) => {

// const composeEnhancers = window.devToolsExtension ? window.devToolsExtension() : f => f
// const createStoreWithMiddleware = composeEnhancers(applyMiddleware(ReduxPromise, thunk)(createStore))

//   var store = createStoreWithMiddleware(reducers, initialState)

//   return store;
// };

export var configureStore = (initialState = {}) => {
  var store = createStore(reducers, initialState, compose(
    applyMiddleware(thunk, ReduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}



