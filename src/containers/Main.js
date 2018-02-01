import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as exampleActions from '../actions/example';

import { ThreeColumnLayout, ThemingLayout, Introduction, ReduxExample, APICaller, LoginForm, SpokeClient } from '../components';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <main style={{paddingTop: "90px", paddingBottom: "30px"}}>
          <Switch>
            <Route exact path='/' render={ (props) => <Introduction {...this.props} {...props} />} />
            <Route exact path='/spoke-client' render={(props) => (<SpokeClient {...this.props} {...props} />)}/>
            <Route exact path='/spoke-provider' render={(props) => (<ThreeColumnLayout {...this.props} {...props} />)}/>
          </Switch>
        </main>
      </div>
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
