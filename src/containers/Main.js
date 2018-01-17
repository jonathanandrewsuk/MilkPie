import * as axios from 'axios';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as exampleActions from '../actions/example';

import { ThreeColumnLayout, ThemingLayout, Introduction, ReduxExample, APICaller } from '../components';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // componentDidMount() {
  //   axios.get('/api/photos').then(res => {
  //     console.log('[Main] fetch photos', res)
  //   })
  //   axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res => {
  //     console.log('[Main] fetch typicode', res)
  //   })
  //   .catch(e => {
  //     console.error('[Main] fetch photos', e)
  //   })
  // }

  render(){
    return (
      <main style={{paddingTop: "90px", paddingBottom: "30px"}}>
        <Switch>
          <Route exact path='/' render={ (props) => <Introduction {...this.props} />} />
          <Route exact path='/theme' render={(props) => (<ThemingLayout {...this.props}/>)}/>
          <Route exact path='/three' render={(props) => (<ThreeColumnLayout {...this.props}/>)}/>
          <Route exact path='/redux' render={(props) => (<ReduxExample {...this.props}/>)}/>
          <Route exact path='/api-caller' render={(props) => (<APICaller {...this.props}/>)}/>
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
