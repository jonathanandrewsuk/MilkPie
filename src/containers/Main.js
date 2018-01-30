import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as exampleActions from '../actions/example';

import { ThreeColumnLayout, ThemingLayout, Introduction, ReduxExample, APICaller, LoginForm } from '../components';

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
            <Route exact path='/theme' render={(props) => (<ThemingLayout {...this.props} {...props} />)}/>
            <Route exact path='/three' render={(props) => (<ThreeColumnLayout {...this.props} {...props} />)}/>
            <Route exact path='/redux' render={(props) => (<ReduxExample {...this.props} {...props} />)}/>
            <Route exact path='/api-caller' render={(props) => (<APICaller {...this.props} {...props} />)}/>
            <Route exact path='/login' render={(props) => (<LoginForm {...this.props} {...props} />)}/>
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
