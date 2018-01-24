import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import example from './example';


const rootReducer = combineReducers({
  example,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
