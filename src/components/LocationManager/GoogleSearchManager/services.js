export const PostInterface = {
  name: undefined,
  postTitle: undefined,
  postContent: undefined,
  phoneNumber: undefined,
  emailAddress: undefined,
  websiteUrl: undefined,
  twitterUrl: undefined,
  googlePlusUrl: undefined,
  facebookUrl: undefined,

  imageUrl: undefined,
  hours: undefined,

  locationAddress: undefined,
  categoryNames: undefined,
  locationLatitude: undefined,
  locationLongitude: undefined,
  locationCountryCode: undefined,
  state: undefined,
  city: undefined,
}

export const GooglePostInterface = Object.assign(
  {},
  PostInterface, 
  { 
    google_place_id: undefined,
    google_reference: undefined,
    google_raw: undefined,
    source: undefined
  }
)
/**
 * 
 * @param {*} places
 * @return Array<GooglePostInterface>
 */
export function convertPlaces(places) {
  return places.map(place => placeToPost(place)).filter(p => !!p)   
}
/**
 * 
 * @param {*} place 
 * @return GooglePostInterface
 * 
 */
export function placeToPost(place) {
      try {

        // START varibale of interest
        let googlePost = Object.assign({}, GooglePostInterface, { source: 'google' })
        // END varibale of interest

        // START parsing
        let google_place_id = place.place_id;
        let google_reference = place.reference;
        let name = place.name;
        let categoryNames = extractCategories(place.types)

        let locationLatitude;
        let locationLongitude;
        let geometry = place.geometry;
        if(geometry) {
          locationLatitude = geometry.location.lat()
          locationLongitude = geometry.location.lng()
        }

        let imageUrl;
        let photos = place.photos;
        if(photos && photos[0]) {
          imageUrl = photos[0].getUrl({ 'maxWidth': 500 })
        }

        let google_raw = btoa(JSON.stringify(place))
        // END parsing

        // START response
      return Object.assign({}, googlePost, { name, imageUrl, categoryNames, locationLatitude, locationLongitude, google_place_id, google_reference, google_raw })
        // END response
    } catch(e) {
      console.error(e)
      return null
    }
}

/**
 * 
 * @param { weekday_text: Array<string> } opening_hours
 * @return {string}  
 */
export function extractHours(opening_hours) {
  let hours = undefined

  if (opening_hours) {
    try {
      let { weekday_text } = opening_hours
      hours = weekday_text.join(', ')  
    } catch(e) {
      // @NOTE no need toprint error
    }  
  }

  return hours;  
}

/**
 * 
 * @param {Array<{long_name: string, short_name: string, types: Array<string>}>} googleAddressComponent 
 * @return { locationCountryCode, state, city }
 */
export function addressToCountry(googleAddressComponent) {
  let city;
  let state;
  let locationCountryCode;

  googleAddressComponent = googleAddressComponent || []

  googleAddressComponent.forEach(component => {

    let { long_name, short_name, types } = component

    if(types.includes('country')) { // extract country code
      locationCountryCode = extractCountryCode(long_name, short_name)
    } else if (types.includes('administrative_area_level_1')) { // extract state
      state = extractState(long_name, short_name)
      
    } else if (types.includes('administrative_area_level_2')) { // extract city
      city = extractCity(long_name, short_name)
      
    }

  })

  return { locationCountryCode, state, city }
}


function extractCountryCode(long_name, short_name) {
  return short_name  
}

function extractState(long_name, short_name) {
  return short_name // @TODO map province to states ['kigali', 'byumba', 'butare' ...]
}
function extractCity(long_name, short_name) {
  return short_name // @TODO ???
}

function extractCategories(types) {
  return types.filter(t => !['point_of_interest', 'locality', 'establishment'].includes(t)).map(t => t.replace('_', ' '))
}

/**
 * @return Promise<{  }>
 */
export function fetchPlaceDetail(service, placeId) {
  return new Promise(resolve => {
    service.getDetails({
      placeId
    }, function(place, status) {
      // @TODO return null if status is not ok
      return resolve(place)
    });
  })
}