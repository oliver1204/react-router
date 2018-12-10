import React, { Component } from 'react';
import { Provider } from './context'

export default class HashRouter extends Component{
	constructor(props){
		super(props);
		this.state = {
			location:{
				pathname: window.location.hash.slice(1) || '/'
			}
        }
        // setTimeout(() => {
        //     console.log(this.props)
        // }, 5000) 
        console.log(this.props)
  }
  componentDidMount(){
    window.location.hash = window.location.hash || '/';
    // 监听hash值变化 重新设置状态
    window.addEventListener('hashchange', () => {
        this.setState({
            location:{
                ...this.state.location,
                pathname: window.location.hash.slice(1) || '/'
            }
        })
        console.log(this.state)
    });
  }
  render(){
		let value = {
			location: this.state.location,
			history: {
				push(path){
					console.log(path)
					window.location.hash = path;
				}
			}
		}
		console.log(value)
		return (
			<Provider value={ value }>
				{ this.props.children }
			</Provider>
		)
	}
}
