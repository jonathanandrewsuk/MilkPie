import React, { Component } from 'react';
import { connect } from 'react-redux'

import {NewPostForm, PostListTable} from '../../ui'

import updateApp from '../../../state-manager/updateApp'

import { generatePostListing } from '../../../data/post-listing'
import { generateTransaction } from '../../../data/transaction'
import { generateAttachment } from '../../../data/post-attachment'
import { generateTermRelationship } from '../../../data/termRelationship'
import { generatePostcode } from '../../../data/postcode'

import { runTests, newPost } from '../../../data/test'


class PostManager extends Component {
  componentDidMount() {
    runTests(newPost)
    updateApp('fetchPosts')
  }
  handleSubmit(val) {
    console.log(val)
    let newPost = JSON.parse(val)

    let { postTitle, postContent, phoneNumber, emailAddress, websiteUrl, twitterUrl, googlePlusUrl, facebookUrl, imageUrl, hours, locationAddress, locationLatitude, locationLongitude, locationCountryCode, state, city, categoryNames } = newPost;
    let postData = generatePostListing(postTitle, postContent, phoneNumber, emailAddress, websiteUrl, twitterUrl, googlePlusUrl, facebookUrl, imageUrl, hours)
    
    updateApp('createNewPost', postData.listing)
    .then(({ data: post }) => {

      let postGuid = postData.generatepostGuid(post.id)

      updateApp('updatePostGuid', { postGuid, postId: post.id })
      .then(() => {

        let metaList = postData.generatePostMetaList(post.id)
        let metaPromises = metaList.map(meta => updateApp('createPostMeta', meta))
        return Promise.all(metaPromises)
      })
      .then(() => {
        // @TODO save transaction      
        console.log('POST saved with extra info')
        let transactionData = generateTransaction(post.id, postTitle)

        return updateApp('createTransaction', transactionData.transaction)
      })
      .then(() => {
        let postcodeData = generatePostcode(post.id, locationAddress, locationLatitude, locationLongitude, locationCountryCode, state, city)

        return updateApp('createPostcode', postcodeData.postcode)
        .then(() => {
          let metaPromises = postcodeData.metaList.map(meta => updateApp('createPostMeta', meta))
          return Promise.all(metaPromises)
        })
      })
      /* @WARNING does not properly save external links
      .then(() => {
        // @TODO save attachment      
        console.log('POST saved with extra info')
        let attachmentData = generateAttachment(post.id, imageName, imageUrl)

        return updateApp('createAttachment', attachmentData.postAttachment)
        .then(({ data: attachmentPost })  => {
          let attachmentMeta =  attachmentData.generateAttachmentMeta(attachmentPost.id, imageUrl)
          return updateApp('createPostMeta', attachmentMeta)
        })
      })
      */
      .then(() => {
        // @TODO save category/termRelationship      
        console.log('POST saved with extra info')
        let metaPromises = categoryNames.map(categoryName => 
          generateTermRelationship(post.id, categoryName).then(termRelationshipData =>
            updateApp('createTermRelationship', termRelationshipData.termRelationship)
          )
        )
        return Promise.all(metaPromises)

      })
      .then(() => {
        alert('Completed');
      })


    })
  }


  render() {
    let { posts } = this.props.postManager;
    return (
      <div className="ui internally celled grid">
        <div style={{ width: '100vw' }}>
          <NewPostForm handleSubmit={(val) => this.handleSubmit(val)} />
        </div>
        <hr/>
        <hr/>
        <div><PostListTable posts={posts}/></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    postManager: state.postManager.toJS(),
  }
}

export default connect(mapStateToProps)(PostManager)