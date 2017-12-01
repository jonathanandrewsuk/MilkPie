import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import { TestHello } from '../components'

class Main extends Component {
  render() {
    return (

      <main style={{ marginBottom:"30px"}}>
        <Switch>
          <Route exact path='/' render={(props) => (<TestHello {...this.props}/>)}/>
        </Switch>
      </main>

    );
  }
}

export default Main;
