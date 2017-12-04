import axios from 'axios'

export default ({ updaterParts }) => {

	const { processBasicActionGroup } = updaterParts

	return {

		// dipsatches actions straight to the store 
		store: (instructions) => {

			// process actions
			processBasicActionGroup({ actionGroup: instructions.actions })
		
		},

		// makes an api call using axios
		api: (instructions) => {

			const { beforeActions, successActions, failureActions, serviceOptions } = instructions

			// process actions for before api call
			processBasicActionGroup({ actionGroup: beforeActions })

			// api call
			return axios(serviceOptions || {})
				.then((res) => {

					// process success actions
					processBasicActionGroup({ res, actionGroup: successActions })
					
					return res

				})
				.catch((error) => {

					// process failure actions
					processBasicActionGroup({ error, actionGroup: failureActions })
					
				})
		},
	}
}