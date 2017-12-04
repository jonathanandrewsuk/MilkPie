import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Tab } from 'semantic-ui-react'


import { Home, PostManager } from '../components/containers'
import { LocationManager} from '../components'

// allow live css updates
// import 'semantic-ui-css/semantic.min.css';
require('../styles/index.css')


class RootApp extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/posts" exact component={PostManager} />
                    <Route path="/location" exact component={LocationManager} />
                </div>
            </BrowserRouter>
      )
    }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(RootApp)