import React from 'react';


import { Main } from '../containers';
import { NavBar } from '../components';

// Menu Items
const leftItems = [
  {
    content: 'Home', key: 'home', icon: 'home', url: '/',
  },
  {
    content: 'Spoke Client', key: 'spoke-client', icon: 'external square', url: 'spoke-client',
  },
  {
    content: 'Spoke Provider', key: 'spoke-provider', icon: 'tree', url: 'spoke-provider',
  },
];

const rightItems = [
  // {
  //   content: 'Login', key: 'login', url: '/login',
  // },
  // {
  //   content: 'Register', key: 'register', url: 'register',
  // },
];


const App = () => (
  <NavBar leftItems={leftItems} rightItems={rightItems} children={<p>hello</p>}>
    <Main/>
  </NavBar>
);

export default App
