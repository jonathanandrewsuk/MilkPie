import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../styles/App.css';

import { Boilerplate, TestCard, TestButton, ResponsiveLayout, TopNav } from '../components'

class App extends Component {
  render() {
    return (
      <div>
        <TopNav/>
        <ResponsiveLayout/>
      </div>
    );
  }
}

export default App;
