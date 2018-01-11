import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import allSagas from './sagas';
import Server from './mock-server';

const sagaMiddleware = createSagaMiddleware();
const reducer = rootReducer;
const middleware = applyMiddleware(sagaMiddleware);

export default function createAppStore(initialValue = {}) {
  let store;

  if (process.env.NODE_ENV === 'development') {
    // Turn on mock server
    Server.on();
    // Development mode with Redux DevTools support enabled.
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Prevents Redux DevTools from re-dispatching all previous actions.
      shouldHotReload: false,
    }) : compose;
    // Create the redux store.
    store = createStore(reducer, initialValue, composeEnhancers(middleware));
  } else {
    // Production mode.
    store = createStore(reducer, initialValue, middleware);
  }
  sagaMiddleware.run(allSagas);
  return store;
}
