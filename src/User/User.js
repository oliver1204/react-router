import React, { Component } from 'react';
import { Link, Route } from '../react-router-dom';
import UserAdd from './UserAdd';
import UserList from './UserList';
import UserDetail from './UserDetail';
export default class User extends Component {
  render() {
    return (<div>
			我是User！我是User！我是User！我内嵌router！
      <div className="col-md-2">
        <ul className="nav nav-stacked">
          <li><Link to="/user/add">用户添加</Link></li>
          <li><Link to="/user/list">用户列表</Link></li>
					<li><Link to="/user/detail/345">用户详情</Link></li>
        </ul>
      </div>
      <div className="col-md-10">
        <Route path="/user/add" component={UserAdd}></Route>
        <Route path="/user/list" component={UserList}></Route>
        <Route path="/user/detail/:id" component={UserDetail}></Route>
      </div>
    </div>)
  }
}
