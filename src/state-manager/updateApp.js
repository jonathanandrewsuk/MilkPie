import store from './store'
import updateSchemas from './updateSchemas'

const { updaters } = store

export default (updateSchemaKey, updateArgs) => {

	updateArgs = updateArgs || {}

	// check that user provides required name field
	if (!updateSchemaKey) {
		console.log('must specify an update name') 
		return
	}

	// check that user provides valid name
	if (!updateSchemas[updateSchemaKey]) {
		console.log('must provide a valid name')
		// fuzzy search possible names and give suggestion along with list of valid instructions
		return
	}

	// create update schema
	const updateSchema = updateSchemas[updateSchemaKey](updateArgs)
	const { type } = updateSchema

	// check that user provides required type field
	if (!type) {
		console.log('must specify an update type') 
		return
	}

	// check that user provides valid processor type
	if (!updaters[type]) {
		console.log('must provide a valid name')
		// fuzzy search possible type and give suggestion alongwith list of valid instructions
		return
	}

	// log information about update
	return updaters[type](updateSchema)
}