import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { render } from "react-dom";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";

import { Main } from '../containers'

const NavBarMobile = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      items={leftItems.map(item => <NavLink className="a" to={item.url}><Menu.Item style={{height: "70px"}} as="a" key={item.key}><Icon name={item.icon}/>{item.content}</Menu.Item></NavLink>)}
      vertical
      visible={visible}
      width="thin"
    />
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
      {children}
      <Menu fixed="top" inverted>
        <Menu.Item style={{height: "60px"}} onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu position="right">
        {rightItems.map(item => <NavLink className="a" to={item.url}><Menu.Item style={{height: "60px"}} as="a" key={item.key}>{item.content}</Menu.Item></NavLink>)}
        </Menu.Menu>
      </Menu>

    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = ({ leftItems, rightItems }) => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item>
        <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
      </Menu.Item>
      {leftItems.map(item =><NavLink className="a" to={item.url}><Menu.Item style={{height: "60px"}} as="a" key={item.key}>{item.content}</Menu.Item></NavLink> )}
      <Menu.Menu position="right">
        {rightItems.map(item => <NavLink className="a" to={item.url}><Menu.Item style={{height: "60px"}} as="a" key={item.key}>{item.content}</Menu.Item></NavLink>)}
      </Menu.Menu>
    </Container>

  </Menu>
);

const NavBarChildren = ({ children }) => (
  <Container>{children}</Container>
);

class NavBar extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}


export default NavBar
