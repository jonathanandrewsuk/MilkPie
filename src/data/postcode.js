// zone data = city data Ex: Pennsylvania
/*
{
    "zonesId": 1,
    "countryId": 1,
    "zoneCode": "BDS",
    "zoneName": "Badakhshan"
},
*/

// country data
/*
{
    "countryId": 1,
    "countryName": "Afghanistan",
    "isoCode2": "AF",
    "isoCode3": "AFG",
    "countryFlg": "http://localhost/wp-content/plugins/Tevolution-LocationManager/images/flags/af.png",
    "isEnable": 1
},
*/

const countries = require('./countries.json')
const zones = require('./zones.json')
const multicities = require('./multicities.json')

const utils = require('../utils')
let { lowercase, spacing, cosineSim } = utils

/**
 * 
 * @param {} code the country code
 */
function findCountryId(code) {
    let country = countries.find( c => lowercase(c.isoCode2) === lowercase(code) )
    return country.countryId
}

function findZoneId(countryId, state) {
    let filterdZones =  zones.filter( c => c.countryId === countryId )

    let selectedZone = null
    
    filterdZones.forEach(z => {
        let score = cosineSim(spacing(lowercase(z.zoneName)), spacing(lowercase(state)))
        if(!selectedZone || selectedZone.score < score) {
            selectedZone = Object.assign({}, z, { score })
        }
    })
    return selectedZone.zonesId    
}

function findCityId(zonesId, city) {
    let filterdCities =  multicities.filter( c => c.zonesId === zonesId )

    let selectedCity = null
    
    filterdCities.forEach(c => {
        let score = cosineSim(spacing(lowercase(c.cityname)), spacing(lowercase(city)))
        if(!selectedCity || selectedCity.score < score) {
            selectedCity = Object.assign({}, c, { score })
        }
    })
    return selectedCity.cityId    
}

function generatePostcode(postId, address, latitude, longitude, code, state, city){
    let postcode = {
        postId,
        postType: "listing",
        address,
        latitude,
        longitude
    }

    // START meta
    let addressMeta = {
        postId: postId,
        "metaKey": "address",
        "metaValue": address
    }
    let geo_latitude = {
        postId: postId,
        "metaKey": "geo_latitude",
        "metaValue": latitude
    }
    let geo_longitude = {
        postId: postId,
        "metaKey": "geo_longitude",
        "metaValue": longitude
    }

    let countryId = findCountryId(code)
    let country_id = {
        postId: postId,
        "metaKey": "country_id",
        "metaValue": countryId
    }
    let zoneId = findZoneId(countryId, state)
    let zones_id = {
        postId: postId,
        "metaKey": "zones_id",
        "metaValue": zoneId
    }
    let post_city_id = {
        postId: postId,
        "metaKey": "post_city_id",
        "metaValue": findCityId(zoneId, city)
    }
    let metaList = [ addressMeta, geo_latitude, geo_longitude, country_id, zones_id, post_city_id ]
    // END meta


    return { 
        postcode,
        metaList
    }
}

module.exports = generatePostcode
module.exports.generatePostcode = generatePostcode