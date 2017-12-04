'use strict';

const postmeta = require('./postmeta.json')
// import { camelize } from '../utils'
const utils = require('../utils')
let { camelize, uuid } = utils

/**
 * 
 * @param {string} postTitle 
 * @param {string} postContent 
 * 
 * @param {string} phoneNumber 
 * @param {string} emailAddress 
 * @param {string} websiteUrl 
 * @param {string} twitterUrl 
 * @param {string} googlePlusUrl 
 * @param {string} facebookUrl 
 */
function generatePostListing(postTitle, postContent, phoneNumber, emailAddress, websiteUrl, twitterUrl, googlePlusUrl, facebookUrl, imageUrl, hours) {
    let postId = 0; // @TODO make a patch request to updatethe guid value
    // WpPosts
    const listing = {
        postAuthor: 2,
        postDate: `${new Date().toISOString()}`,
        postDateGmt: `${new Date().toISOString()}`,
        postContent: `${postContent}`,
        postTitle: `${postTitle}`,
        postExcerpt: ``,
        postStatus: `publish`,
        commentStatus: `open`,
        pingStatus: `open`,
        postPassword: ``,
        postName: `${camelize(postTitle)}-${uuid()}`,
        toPing: ``,
        pinged: ``,
        postModified: `${new Date().toISOString()}`,
        postModifiedGmt: `${new Date().toISOString()}`,
        postContentFiltered: ``,
        postParent: 0,
        guid: `http://localhost/?post_type=listing&p=${postId}`,
        menuOrder: 0,
        postType: `listing`, // @NOTE very important!!!
        postMimeType: ``,
        commentCount: 0
    };

    let generatepostGuid = (postId) => ({
        guid: `http://localhost/?post_type=listing&p=${postId}`
    })
    // START meta
let generatePostMetaList = (postId) => {
    const phone = {
        postId: postId,
        metaKey: `phone`,
        metaValue: `${phoneNumber}`
    };
    const email = {
        postId: postId,
        metaKey: `email`,
        metaValue: `${emailAddress}`
    };
    const website = {
        postId: postId,
        metaKey: `website`,
        metaValue: `${websiteUrl}`
    };
    const twitter = {
        postId: postId,
        metaKey: `twitter`,
        metaValue: `${twitterUrl}`
    };
    const google_plus = {
        postId: postId,
        metaKey: `google_plus`,
        metaValue: `${googlePlusUrl}`
    };
    const facebook = {
        postId: postId,
        metaKey: `facebook`,
        metaValue: `${facebookUrl}`
    };
    const listing_logo = {
        postId: postId,
        metaKey: `listing_logo`,
        metaValue: `${imageUrl}`
    };
    const listing_banner = {
        postId: postId,
        metaKey: `listing_banner`,
        metaValue: `${imageUrl}`
    };
    const listing_timing = hours? {
        postId: postId,
        metaKey: `listing_timing`,
        metaValue: `${hours}`
    }: undefined;

    // {
    //     "postId": 297,
    //     "metaKey": "listing_banner",
    //     "metaValue": ""
    // },

    return [
        ...postmeta.map(meta => Object.assign({}, meta, {postId: postId})),
        phone,email,website,twitter,google_plus,facebook, listing_logo, listing_banner, listing_timing
    ];
}
    // END meta


    return {
        listing,
        generatePostMetaList, 
        generatepostGuid,
    }
}


module.exports = generatePostListing
module.exports.generatePostListing = generatePostListing

/*
{
    "postTitle": "TODO 2",
    "postContent": "TODO 2 description <h1>nice</h2>",
    "phoneNumber": "111-111-2222",
    "emailAddress": "wqwqw@wewewe.com",
    "websiteUrl": "http://aaaaa.com",
    "twitterUrl": "http://qweqweqwe.com",
    "googlePlusUrl": "http://google.plus/me",
    "facebookUrl": "http://facebook.com/qweqwe",
    "categoryNames": ["string"]
}
*/