import React, { Component } from 'react'
import { Menu, Grid } from 'semantic-ui-react'

import logo from '../../assets/images/logo.svg';

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <div>
  <Menu>
    <Grid container fluid style={{margin: 0}} >
      <Menu id="innerMenu" stackable fluid style={{}}>
        <Menu.Item>
          <img src={logo} />
        </Menu.Item>

        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Features
        </Menu.Item>

        <Menu.Item
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Testimonials
        </Menu.Item>

        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item>
      </Menu>
    </Grid>
  </Menu>
  </div>
    )
  }
}
