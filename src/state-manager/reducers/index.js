import { combineReducers } from 'redux'
import makeReducer from './makeReducer'
import reducerConfigs from './reducerConfigs'

// @NOTE has to be form ????
import { reducer as form } from 'redux-form/immutable';

let configuredReducers = {}

Object.keys(reducerConfigs).forEach((reducerName) => {
	configuredReducers[reducerName] = makeReducer(reducerConfigs[reducerName])
})

// you can add more reducers here by adding key/value pairs to the 
// configuredReducers hash


export default combineReducers({...configuredReducers, form})