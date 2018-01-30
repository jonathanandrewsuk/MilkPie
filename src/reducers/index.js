import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import example from './example';
import auth from './auth';


const rootReducer = combineReducers({
  example,
  auth,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
