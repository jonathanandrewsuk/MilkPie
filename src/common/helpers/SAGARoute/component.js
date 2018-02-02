import React from 'react';
import { Route, Switch } from 'react-router';

export default class SAGARoute extends React.Component {
  componentWillMount() {
    if (this.props.fetchData) {
      this.props.fetchData(this.props);
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.component.name !== this.props.component.name) {
      if (this.props.fetchData) {
        this.props.fetchData(this.props);
      }
    }
  }
  render() {
    let { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={props => (<Component {...rest} {...props} />)} />
    );
  }
}
