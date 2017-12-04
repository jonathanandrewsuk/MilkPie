import React from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'

const PostListTable = ({ posts }) => {
  let tableRows = posts.map((post, index) => {
    return  <Table.Row key={index}>
      <Table.Cell>
        {post.postType}
      </Table.Cell>
      <Table.Cell singleLine>{post.postTitle}</Table.Cell>
      <Table.Cell textAlign='left'>
        {post.postStatus} <br />
        <a href={post.guid}>{post.guid}</a>
      </Table.Cell>
      <Table.Cell>
        {post.postContent}
      </Table.Cell>
    </Table.Row>
  })
  
  return (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Post Type</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Link</Table.HeaderCell>
        <Table.HeaderCell>Content</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>


      {tableRows}



    </Table.Body>
  </Table>
)
}

export default PostListTable