import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import combinedReducer from './reducers'
import makeUpdaterParts from './updaters/makeUpdaterParts'
import makeUpdaters from './updaters/makeUpdaters'
import alertify from 'alertify.js'
import swal from 'sweetalert';
import jquery from 'jquery'
import toastr from 'toastr'

const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware(logger)
);

// make components and processors
const updaterParts = makeUpdaterParts({ store, alertify: {}, swal, toastr })
const updaters = makeUpdaters({ updaterParts })

// extend store
store.updaterParts = updaterParts
store.updaters = updaters

export default store