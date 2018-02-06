import { combineReducers } from 'redux';
import rfqs from './rfqs';
import quotes from './quotes';

// export default rootReducer;
export default combineReducers({
  rfqs, quotes,
});
