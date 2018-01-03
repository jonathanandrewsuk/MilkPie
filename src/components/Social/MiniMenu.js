import React from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

const MiniMenu = ()  => (
  <Menu size='small' vertical fluid="true">
    <Menu.Item as={NavLink} name='inbox' to='/inbox'>
      <Label color='teal'>1</Label>
      Inbox
    </Menu.Item>

    <Menu.Item as={NavLink} name='spam' to='/spam' >
      <Label>51</Label>
      Spam
    </Menu.Item>

    <Menu.Item as={NavLink} name='updates' to='/updates' >
      <Label>1</Label>
      Updates
    </Menu.Item>
    <Menu.Item>
      <Input icon='search' placeholder='Search mail...' />
    </Menu.Item>
  </Menu>
);
export default MiniMenu;
