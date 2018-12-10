import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import pathToReg from 'path-to-regexp';
import { Consumer } from './context';

export default class Route extends Component{
  render() {
    return <Consumer>
        { 
            state => {
                // 继承自父亲
                let { path, component: Component, exact = false } = this.props
                // 来自提供者 provider
                let pathname = state.location.pathname;
                // 根据 path 实现一个正则 通过这则匹配
                let keys = [];
                let reg = pathToReg(path, keys, { end: exact}); 
                keys = keys.map( item => item.name ); //keys 匹配参数 [{ name: 'id', prefix: '/', delimiter: '/', optional: false, repeat: false, pattern: '[^\\/]+?' }]
                        
                let result = pathname.match(reg); // [path, index, input]
                        
                let [url,...values] = result || []; 

                let props = {
                    location: state.location,
                    history: state.history,
                    match: {
                        params: keys.reduce((obj, current, idx) => {
                            obj[current] = values[idx];
                            return obj;
                        }, {})
                    }
                }
                if (result){
                    return <Component {...props}></Component>
                }
                return null
            } 
        }
    </Consumer>
 }
}
