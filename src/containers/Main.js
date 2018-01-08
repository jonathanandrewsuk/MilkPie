import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as exampleActions from '../actions/example';

import { Social, TestForm, ThemingLayout, PrivateRoute } from '../components'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <main style={{paddingTop: "90px", paddingBottom: "30px"}}>
        <Switch>
          <Route exact path='/' render={(props) => (<ThemingLayout {...this.props}/>)}/>
          <Route exact path='/social' render={(props) => (<Social {...this.props}/>)}/>
          <Route exact path='/register' render={(props) => (<TestForm {...this.props}/>)}/>
          <PrivateRoute authed={this.props.authed} path='/dashboard' component={(props) => (<TestForm {...this.props}/>)}/>
        </Switch>
      </main>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        example: state.example,
    };
}

function mapDispatchToProps(dispatch) {
    return {
      exampleActions: bindActionCreators(exampleActions, dispatch),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Main));
