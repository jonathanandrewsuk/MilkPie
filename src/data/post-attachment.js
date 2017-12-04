// attachment

'use strict';

// import { camelize } from '../utils'
const utils = require('../utils')
let { camelize } = utils

function generateAttachment(postId, imageName, imageUrl) {
    // WpPosts
    const postAttachment = {
        postAuthor: 2,
        postDate: `${new Date().toISOString()}`,
        postDateGmt: `${new Date().toISOString()}`,
        postContent: ``,
        postTitle: `${camelize(imageName)}`,
        postExcerpt: ``,
        postStatus: `inherit`,
        commentStatus: `open`,
        pingStatus: `open`,
        postPassword: ``,
        postName: `${camelize(imageName)}`,
        toPing: ``,
        pinged: ``,
        postModified: `${new Date().toISOString()}`,
        postModifiedGmt: `${new Date().toISOString()}`,
        postContentFiltered: ``,
        postParent: postId,
        guid: `${imageUrl}`,
        menuOrder: 0,
        postType: `attachment`,
        postMimeType: `image/png`,
        commentCount: 0
    }

    // WpPostmeta
    const generateAttachmentMeta = (postAttachmentId, imageUrl) => ({
        postId: postAttachmentId,
        metaKey: `_wp_attached_file`,
        metaValue: `${imageUrl}`
    })

    return {
        postAttachment,
        generateAttachmentMeta
    }
}    

module.exports = generateAttachment
module.exports.generateAttachment = generateAttachment
