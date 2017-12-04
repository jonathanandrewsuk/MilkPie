// var WebSocket = require('ws')

export default {
	fetchCountries: ({ limit = 10 }) => ({
		type: 'api',
		serviceOptions: {
			method: 'POST',
			url: `http://localhost:3030/graphql?`,
			data: {
				query: `
					query getCountries {

						countries: allWpCountries(first: ${limit}) {
							data: WpCountries {
								countryId
								countryName
								countryFlg
							}
						}
					  
					}
				`
			}
		},
		successActions: {
			updatePost: { // @TODO
				type: 'LOCATION_MANAGER',
				location: ['countries'],
				reducerMethod: 'setIn',
				valueFunction: ({ res }) => {
					return res.data.data.countries.data
				}
			},
		},
	}),
	fetchCountry: ({ name }) => ({
		type: 'api',
		serviceOptions: {
			method: 'POST',
			url: `http://localhost:3030/graphql?`,
			data: {
				query: `
					query getCountry {

						country: allWpCountries(where: { countryName: "${name}" }) {
							data: WpCountries {
								countryId
								isoCode2
								isoCode3
							}
						}
					  
					}
				`
			}
		},
		successActions: {
			updatePost: { // @TODO
				type: 'LOCATION_MANAGER',
				location: ['countries'],
				reducerMethod: 'push',
				valueFunction: ({ res }) => {
					// const quote = JSON.parse(res.data)
					debugger					
					return res.data // Immutable list
				}
			},
		},
	}),
	fetchStates: ({ countryId, limit = 10 }) => ({
		type: 'api',
		serviceOptions: {
			method: 'POST',
			url: `http://localhost:3030/graphql?`,
			data: {
				query: `
					query getStates {
						country: WpCountries(id: ${countryId}) {
							countryId
							isoCode2
							isoCode3
							countryFlg
						}
						states: allWpZones(where: { countryId: ${countryId} } first: ${limit}) {
							data: WpZones {
								zonesId
								zoneCode
								zoneName
							}
						}
					}
				`
			}
		},
		successActions: {
			updatePost: { // @TODO
				type: 'LOCATION_MANAGER',
				location: ['states'],
				reducerMethod: 'setIn',
				valueFunction: ({ res }) => {
					// const quote = JSON.parse(res.data)
					debugger
					return res.data // Immutable list
				}
			},
		},
	}),
	fetchPosts: () => ({
		type: 'api',
		serviceOptions: {
			method: 'GET',
			url: 'http://localhost:3030/api/WpPosts'
		},
		beforeActions: {
			startLoader: {
				type: 'POST_MANAGER',
				location: ['loading'],
				reducerMethod: 'setIn',
				value: true
			},
			resetLoaded: {
				type: 'POST_MANAGER',
				location: ['loaded'],
				reducerMethod: 'setIn',
				value: false
			}
		},
		successActions: {
			storePosts: { // @TODO
				type: 'POST_MANAGER',
				location: ['posts'],
				reducerMethod: 'setIn',
				valueFunction: ({ res }) => {
					// const quote = JSON.parse(res.data)
					return res.data // Immutable list
				}
			},
			stopLoader: {
				type: 'POST_MANAGER',
				location: ['loading'],
				reducerMethod: 'setIn',
				value: false
			},
			confirmLoaded: {
				type: 'POST_MANAGER',
				location: ['loaded'],
				reducerMethod: 'setIn',
				value: true
			}
		},
		failureActions: {
			onFailure: {
				type: '',
				uiEventFunction: ({ error }) => {
					console.log('error', error)
				}
			}
		}
	}),

	createNewPost: (postListing) => ({
		type: 'api',
		serviceOptions: {
			method: 'POST',
			url: 'http://localhost:3030/api/WpPosts',
			data: postListing
		},
		beforeActions: {
			startLoader: {
				type: 'POST_MANAGER',
				location: ['loading'],
				reducerMethod: 'setIn',
				value: true
			},
			resetLoaded: {
				type: 'POST_MANAGER',
				location: ['loaded'],
				reducerMethod: 'setIn',
				value: false
			}
		},
		successActions: {
			storePosts: { // @TODO
				type: 'POST_MANAGER',
				location: ['posts'],
				reducerMethod: 'push',
				valueFunction: ({ res }) => {
					// const quote = JSON.parse(res.data)
					return res.data // Immutable list
				}
			},
			stopLoader: {
				type: 'POST_MANAGER',
				location: ['loading'],
				reducerMethod: 'setIn',
				value: false
			},
			confirmLoaded: {
				type: 'POST_MANAGER',
				location: ['loaded'],
				reducerMethod: 'setIn',
				value: true
			}
		},
		failureActions: {
			onFailure: {
				type: '',
				uiEventFunction: ({ error }) => {
					console.log('error', error)
				}
			}
		}
	}),
	
	updatePostGuid: ({postGuid, postId}) => ({
		type: 'api',
		serviceOptions: {
			method: 'PATCH',
			url: `http://localhost:3030/api/WpPosts/${postId}`,
			data: postGuid
		},
		successActions: {
			updatePost: { // @TODO
				type: 'POST_MANAGER',
				location: ['posts'],
				reducerMethod: 'push',
				valueFunction: ({ res }) => {
					// const quote = JSON.parse(res.data)
					
					return res.data // Immutable list
				}
			},
			stopLoader: {
				type: 'POST_MANAGER',
				location: ['loading'],
				reducerMethod: 'setIn',
				value: false
			}
		},
	}),
	createPostMeta: (meta) => ({
		type: 'api',
		serviceOptions: {
			method: 'POST',
			url: `http://localhost:3030/api/WpPostmeta`,
			data: meta
		},
	}),
	createTransaction: (transaction) => ({
		type: 'api',
		serviceOptions: {
			method: 'POST',
			url: `http://localhost:3030/api/WpTransactions`,
			data: transaction
		},
	}),
	createAttachment: (postAttachment) => ({
		type: 'api',
		serviceOptions: {
			method: 'POST',
			url: `http://localhost:3030/api/WpPosts`,
			data: postAttachment
		},
		successActions: {
			updatePost: { // @TODO
				type: 'POST_MANAGER',
				location: ['posts'],
				reducerMethod: 'push',
				valueFunction: ({ res }) => {
					// const quote = JSON.parse(res.data)
					
					return res.data // Immutable list
				}
			},
		},
	}),
	createTermRelationship: (termRelationship) => ({
		type: 'api',
		serviceOptions: {
			method: 'POST',
			url: `http://localhost:3030/api/WpTermRelationships`,
			data: termRelationship
		},
	}),
	createPostcode: (postcode) => ({
		type: 'api',
		serviceOptions: {
			method: 'POST',
			url: `http://localhost:3030/api/WpPostcodes`,
			data: postcode
		},
	}),
	
	// START 
	searchPlaces: ({ country = 'rwanda' }) => ({
		type: 'googlePlaces',
		serviceOptions: {
			// @TODO
		},
	})
}