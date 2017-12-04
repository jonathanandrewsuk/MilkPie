import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react'

import WordpressdbManager from './WordpressdbManager'
import GoogleSearchManager from './GoogleSearchManager'
import FacebookSearchManager from './FacebookSearchManager'



class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingWordpressdb: false,
      loadingGoogle: false,
      loadingFacebook: false,
    }
  }
  triggerLoading(isLoadingObject) { // isLoadingObject = { loadingGoogle: false|true }
    this.setState(isLoadingObject)
  }
  render() {
    let { loadingWordpressdb, loadingGoogle, loadingFacebook } = this.state;
    const panes = [
      { menuItem: 'Wordpress DB', render: () => <Tab.Pane loading={loadingWordpressdb}><WordpressdbManager triggerLoading={(isLoadingObject) => this.triggerLoading(isLoadingObject)} /></Tab.Pane> },
      { menuItem: 'Google', render: () => <Tab.Pane loading={loadingGoogle}><GoogleSearchManager triggerLoading={(isLoadingObject) => this.triggerLoading(isLoadingObject)}/></Tab.Pane> },
      { menuItem: 'Facebook', render: () => <Tab.Pane loading={loadingFacebook}><FacebookSearchManager triggerLoading={(isLoadingObject) => this.triggerLoading(isLoadingObject)}/></Tab.Pane> },
    ]
    return <Tab panes={panes} />
  } 

}
export default Tabs