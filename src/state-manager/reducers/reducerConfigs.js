import { WELCOME_TEXT } from '../constants'
export default {
	appState: {
		typeString: 'APP_STATE',
		defaultState: {
			isFetching: false,
			WELCOME_TEXT
		},
	},
	postManager: {
		typeString: 'POST_MANAGER',
		defaultState: {
			loading: false,
			loaded: false,
			newPost: '',
			posts: [],
		}
	},
	locationManager: {
		typeString: 'LOCATION_MANAGER',
		defaultState: {
			loading: false,
			loaded: false,
			countries: [],
			states: [],
		}
	},
	googleSearchManager: {
		typeString: 'GOOGLE_SEARCH_MANAGER',
		defaultState: {
			loading: false,
			loaded: false,
			places: [],
		}
	},
}