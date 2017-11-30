import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../styles/App.css';

import { Boilerplate, TestCard, TestButton } from '../components'

class App extends Component {
  render() {
    return (
      <div>
        <TestCard/>
        <TestButton/>
      </div>
    );
  }
}

export default App;
