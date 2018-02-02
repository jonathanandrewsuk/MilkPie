import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import bookStore from './book-store';
import example from './example';
import auth from './auth';


const rootReducer = combineReducers({
  bookStore,
  example,
  auth,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
