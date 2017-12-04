import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class NewPostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPost: ''
    }
  }
  handleChange(e, { name, value }) {
    this.setState({ newPost: value })
  }
  render() {
    let { handleSubmit } = this.props;
    return (
      <Form onSubmit={(e) => handleSubmit(this.state.newPost)}>
        <Form.TextArea value={this.state.newPost} onChange={(e, { name, value }) => this.handleChange(e, { name, value })} rows="10" label='New Post' placeholder='Add new post here in json format' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default NewPostForm