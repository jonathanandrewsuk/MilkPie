import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component {

  render() {
    let { WELCOME_TEXT } = this.props.globals
    return (
      <div className="ui internally celled grid">
          {WELCOME_TEXT}
      </div>
    )
  }

}


function mapStateToProps(state) {
  return { 
    globals: state.appState.toJS()
  }
}


export default connect(mapStateToProps)(Home)