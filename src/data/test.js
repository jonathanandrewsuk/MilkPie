'use strict';

const postListingNS = require('./post-listing')
const transactionNS = require('./transaction')
const postAttachmentNS = require('./post-attachment')
const termRelationshipNS = require('./termRelationship')
const postcodeNS = require('./postcode')

let { generatePostListing } = postListingNS
let { generateTransaction } = transactionNS
let { generateAttachment } = postAttachmentNS
let { generateTermRelationship } = termRelationshipNS
let { generatePostcode } = postcodeNS

const newPost = {
    "postTitle": "TODO 2",
    "postContent": "TODO 2 description <h1>nice</h2>",
    "phoneNumber": "111-111-2222",
    "emailAddress": "wqwqw@TODO2.com",
    "websiteUrl": "http://TODO2.com",
    "twitterUrl": "http://TODO2.com",
    "googlePlusUrl": "http://google.plus/TODO2",
    "facebookUrl": "http://facebook.com/TODO2",
    
    "imageUrl": "http://www.iwacu-burundi.org/blogs/ikirundi/files/2015/02/Uruhande-rwo-mu-Kabasazi-rugeramiwe-nubusuma.jpg",
    "hours": "10.00-18.00 week days - Sunday closed",

    "locationAddress": "2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130, USA",
    "locationLatitude": "39.96226478178816",
    "locationLongitude": "-75.17747000000003",
    "locationCountryCode": "US",
    "state": "Pennsylvania",
    "city": "Philadelphia",
    
    "categoryNames": ["food", "shopping"]
}

function runTests(newPostInput) {
    
let { postTitle, postContent, phoneNumber, emailAddress, websiteUrl, twitterUrl, googlePlusUrl, facebookUrl, imageUrl, hours, locationAddress, locationLatitude, locationLongitude, locationCountryCode, state, city, categoryNames } = newPostInput;
let postData = generatePostListing(postTitle, postContent, phoneNumber, emailAddress, websiteUrl, twitterUrl, googlePlusUrl, facebookUrl, imageUrl, hours)

console.log(postData.listing)

let post = { id: 123 }
let postGuid = postData.generatepostGuid(post.id)

console.log(postGuid)

let metaList = postData.generatePostMetaList(post.id)

console.log(metaList)

let transactionData = generateTransaction(post.id, postTitle)
console.log(transactionData)

let postcodeData = generatePostcode(post.id, locationAddress, locationLatitude, locationLongitude, locationCountryCode, state, city)
console.log(postcodeData)

// let attachmentData = generateAttachment(post.id, imageName, imageUrl)

// console.log(attachmentData)

// let attachmentPost = { id: 125 }
// let attachmentMeta =  attachmentData.generateAttachmentMeta(attachmentPost.id, imageUrl)

// console.log(attachmentMeta)

Promise.all(
    categoryNames.map(categoryName =>
        generateTermRelationship(post.id, categoryName).then(termRelationshipData => {
            console.log(termRelationshipData);  
        })
    )
)

}
runTests(newPost)
module.exports = runTests

module.exports.newPost = newPost
module.exports.runTests = runTests