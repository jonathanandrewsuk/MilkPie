/*
  // WpTermTaxonomy
  {
    "termTaxonomyId": 23,
    "termId": 23,
    "taxonomy": "listingcategory",
    "description": "You can disable/enable this sorting option from wp-admin – Tevolution – Settings – Category Page – Sorting option. Also, you can set the default list view or grid view from here. To enable the map view enable the Map view option from the same page. To change this text go to wp-admin - Listings - listings Category - and change the description of individual category.",
    "parent": 0,
    "count": 3
  }

  // WpTerms
  {
    "termId": 23,
    "name": "Food and Drink",
    "slug": "food-and-drink",
    "termGroup": 0,
    "termPrice": "0",
    "termIcon": "http://localhost/wp-content/themes/Listings/images/markers/marker-3.png"
  }
*/
'use strict';

const utils = require('../utils')
let { lowercase, spacing, cosineSim } = utils

const terms = require('./terms.json')
const taxonomies = require('./taxonomies.json')

/**
 * 
 * @return { termId: string, name: string } 
 */
function getTermIdByName(name) {
  return new Promise(resolve => {
    let selectedTerm = null

    terms.forEach(t => {
      let score = cosineSim(spacing(lowercase(t.name)), spacing(lowercase(name)))
      if(!selectedTerm || selectedTerm.score < score) {
        // console.log(spacing(t.name), spacing(name), cosineSim(spacing(t.slug), spacing(name)))
        selectedTerm = Object.assign({}, t, { score })
      }
    })
    return resolve(selectedTerm)

  })
}


function getTaxonomyId(term) {
  return term && (taxonomies.find(t => t.termId === term.termId) || {}).termTaxonomyId
}

/**
 * @param {*} postId 
 * @param {*} categoryName 
 * @return Promise<{ termRelationship: Object }>
 */
function generateTermRelationship(postId, categoryName) {
  return getTermIdByName(categoryName).then(term => {
    if(!term)
      return null

    let termRelationship = {
      objectId: postId,
      termTaxonomyId: getTaxonomyId(term),
      termOrder: 0
    }
    return Promise.resolve({
      termRelationship
    })

  })
}

module.exports = generateTermRelationship
module.exports.generateTermRelationship = generateTermRelationship
