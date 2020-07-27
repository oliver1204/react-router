import React, { Component } from 'react';
import RouterContext from './RouterContext.js';

export default class HashRouter extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    location: {
      pathname: window.location.hash.slice(1),
      state: window.history.state,
    },
  };
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      console.log(window.location.hash.slice(1));
      this.setState({
        ...this.state,
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/',
        },
      });
    });
    window.location.hash = window.location.hash || '/';
  }
  render() {
    let _this = this;
    let history = {
      location: _this.state.location,
      push(path) {
        if (typeof path === 'object') {
          window.location.hash = path.pathname;
          _this.state.location.state = path.state;
        } else {
          window.location.hash = path;
        }
      },
    };
    let routerValue = {
      ..._this.state,
      history,
    };
    return (
      <RouterContext.Provider value={routerValue}>
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}
