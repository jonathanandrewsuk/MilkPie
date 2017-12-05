import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import { Home, Boilerplate } from '../components'

class Main extends Component {
  render() {
    return (

      <main style={{paddingTop: "90px", paddingBottom: "30px"}}>
        <Switch>
          <Route exact path='/' render={(props) => (<Home {...this.props}/>)}/>
          <Route exact path='/users' render={(props) => (<Boilerplate {...this.props}/>)}/>
        </Switch>
      </main>

    );
  }
}

export default Main;
