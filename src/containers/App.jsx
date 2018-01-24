import React from 'react';


import { Main } from '../containers';
import { NavBar } from '../components';

// Menu Items
const leftItems = [
  {
    content: 'Home', key: 'home', icon: 'home', url: '/',
  },
  {
    content: 'Theme', key: 'theme', icon: 'theme', url: 'theme',
  },
  {
    content: 'Layout', key: 'three', icon: 'write', url: 'three',
  },
  {
    content: 'Redux', key: 'redux', icon: 'tree', url: 'redux',
  },
  {
    content: 'API', key: 'api-caller', icon: 'external square', url: 'api-caller',
  },
];

const rightItems = [
  {
    content: 'Login', key: 'login', url: '/',
  },
  {
    content: 'Register', key: 'register', url: 'register',
  },
];


const App = () => (
  <NavBar leftItems={leftItems} rightItems={rightItems} children={<p>hello</p>}>
    <Main/>
  </NavBar>
);

export default App
