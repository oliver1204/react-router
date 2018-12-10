import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link, Switch, Redirect } from './react-router-dom/index';


import Home from './Home/Home';
import User from './User/User';
import Profile from './Profile/Profile';

import 'bootstrap/dist/css/bootstrap.css'

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
                <li> <Link to="/home">首页</Link></li>
                <li> <Link to="/profile/134">个人中心</Link></li>
                <li> <Link to="/user">用户</Link></li>
              </ul>
            </div>
          </div>
          <div className="container">
            <Switch>
              <Route path="/home" exact={true} component={Home}></Route>
              <Route path="/profile/:id" component={Profile}></Route>
              <Route path="/user" component={User}></Route>
              <Redirect to="/home"></Redirect>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
render(<App></App>, window.root);


{/* <Router>  --> provite
	<Link/>  ->  <a href="#/home"></a> --> Consumer
	<Link/>  ->  <a href="#/profile"></a> --> Consumer
	<Link/>  ->  <a href="#/user"></a> --> Consumer

	<Route></Route> -> <Component to="#/home"> home's content </Component> --> Consumer
	<Route></Route> -> <Component to="#/profile"> profile's content </Component> --> Consumer
	<Route></Route> -> <Component to="#/user"> user's content </Component> --> Consumer
	<Redirect/>
</Router> */}

// {
		// <Consumer>
		// 		{ state=>{
		// 				return <a onClick={() => {
		// 					state.history.push(this.props.to);
		// 				}}>{ this.props.children }</a>
		// 			}
		// 		}
		// 	</Consumer> 
// 	<Consumer>	{ state => {
// 		// 继承自父亲
// 		let { path, component: Component, exact = false } = this.props

// 		console.log(path)
// 		// 来自提供者
// 		let pathname = state.location.pathname;
		
// 		// 根据path实现一个正则 通过这则匹配
// 		let keys = [];
// 		let reg = pathToReg(path, keys, { end: exact}); 
// 		keys = keys.map( item => item.name ); //keys 匹配参数 [{ name: 'id', prefix: '/', delimiter: '/', optional: false, repeat: false, pattern: '[^\\/]+?' }]
		
// 		let result = pathname.match(reg); // [path, index, input]
		
// 		let [url,...values] = result || []; 

// 		let props = {
// 			location: state.location,
// 			history: state.history,
// 			match:{
// 				params: keys.reduce((obj, current, idx)=>{
// 					obj[current] = values[idx];
// 					return obj;
// 				},{})
// 			}
// 		}
// 		if (result){
// 			return <Component {...props}></Component>
// 		}
// 		return null
// 	} 
// }
// </Consumer>
// }