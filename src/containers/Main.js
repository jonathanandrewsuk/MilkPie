import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import SAGARoute from '../common/helpers/SAGARoute';

import * as exampleActions from '../actions/example';
import * as bookStoreActions from '../actions/book-store';


import { ThreeColumnLayout, ThemingLayout, Introduction, ReduxExample, APICaller, LoginForm, SpokeClient, SpokeProvider, SpokeProviders } from '../components';

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
            <Route exact path='/spoke-provider' render={(props) => (<SpokeProviders {...this.props} {...props} />)}/>

            <SAGARoute
              {...this.props}
              exact
              path="/spoke-provider/:storeId"
              component={SpokeProvider}
              fetchData={props => props.bookStoreActions.SAGAgetBooks({ storeId: window.location.pathname.split('/')[window.location.pathname.split('/').length-1].replace(':','') })}
            />

          </Switch>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        example: state.example,
        bookStore: state.bookStore,
    };
}

function mapDispatchToProps(dispatch) {
    return {
      exampleActions: bindActionCreators(exampleActions, dispatch),
      bookStoreActions: bindActionCreators(bookStoreActions, dispatch),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Main));
