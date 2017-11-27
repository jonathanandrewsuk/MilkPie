import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../styles/App.css';

import { Boilerplate, TestCard } from '../components'

class App extends Component {
  render() {
    return (
      <div>
        <Boilerplate/>
        <TestCard/>
      </div>
    );
  }
}

export default App;
