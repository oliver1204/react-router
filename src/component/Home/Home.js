import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  render() {
    console.log(this.props);
    return <div className="home">我是Home！我是Home！我是Home！</div>;
  }
}
