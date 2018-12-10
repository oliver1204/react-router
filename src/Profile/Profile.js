import React,{Component} from 'react';
// import ReactDOM from 'react-dom';

import './Profile.css'
export default class Profile extends Component{
	constructor() {
		super();
		console.log(super())

		// this.props = {
		// 	history: {
		// 		hash: "",
		// 		pathname: "/home",
		// 		location: {},
		// 		push: function(path, state) {}
		//  },
		// 	location: {
		// 		hash: '',
		// 		pathname: 'home'
		// 	},
		// 	match: {
		// 		path: "/home", 
		// 		url: "/home", 
		// 		isExact: true, 
		// 		params: {id: "134"}
		// 	}
		// }
  }
  render(){
    return (
			<div className="content">
        我是Profile！我是Profile！我是Profile！ 
		 	</div>
		)
  }
}