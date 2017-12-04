import { fromJS } from 'immutable'

export default ({ typeString, typeArrayString, defaultState }) => {
	return (state = fromJS(defaultState || {}), action) => {
		const { keyArray, value, updateFunction, reducerMethod, location } = action
    	switch (action.type) {
		case typeString:
			if(['push'].includes(reducerMethod)) {
				return state.updateIn(location, arr => arr[reducerMethod](updateFunction || fromJS(value) || undefined))
			} else {
				return state[reducerMethod]( location, updateFunction || fromJS(value) || undefined )				
			}
        default:
            return state
    	}
	}
}