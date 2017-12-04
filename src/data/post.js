'use strict';

exports.post = {
    'postAuthor': 2,
    'postDate': `${new Date().toISOString()}`,
    'postDateGmt': `${new Date().toISOString()}`,
    'postContent': `<p>TODO 1 Description</p>`,
    'postTitle': `${postTitle}`,
    'postExcerpt': ``,
    'postStatus': `published`,
    'commentStatus': `open`,
    'pingStatus': `open`,
    'postPassword': ``,
    'postName': `${camelize(postTitle)}`,
    'toPing': ``,
    'pinged': ``,
    'postModified': `${new Date().toISOString()}`,
    'postModifiedGmt': `${new Date().toISOString()}`,
    'postContentFiltered': ``,
    'postParent': 0,
    'guid': `http://localhost/?post_type=listing&p=${postId}`,
    'menuOrder': 0,
    'postType': `listing`,
    'postMimeType': ``,
    'commentCount': 0
};


module.exports.getPost = function(postTitle) {

};