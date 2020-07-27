import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from './react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Home from './component/Home/Home';
import User from './component/User/User';
import Profile from './component/Profile/Profile';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-heading">
                <div className="navbar-brand">React-Router</div>
              </div>
              <ul className="nav navbar-nav">
                <li>
                  {' '}
                  <Link to="/home">首页</Link>
                </li>
                <li>
                  {' '}
                  <Link to="/profile/134">个人中心</Link>
                </li>
                <li>
                  {' '}
                  <Link to="/user">用户</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/profile" component={Profile}></Route>
              <Route path="/user" component={User}></Route>
              <Redirect to="/home"></Redirect>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
