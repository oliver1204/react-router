import React from 'react';
import { Route, Redirect } from '../react-router-dom';

/**
 * 判断是否登陆，如果登陆了则直接跳转对于界面，如果没有登陆跳转登陆界面
 * Route 组件理渲染组件有三种不同的方式：
 * 1. component： 最简单，但是不能传参数且对应path必须一直
 * 2. render： 能传参数， 但是对应path必须一致
 * 3. children： 能传参数， 对应path没有必要一致，任何情况都可以渲染
 */

export default function Private(props) {
  let { path, component: RouteComponent } = props;
  return (
    <Route
      path={path}
      render={(routeProps) => {
        return localStorage.getItem('login') ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: routeProps.location.pathname },
            }}
          />
        );
      }}
    ></Route>
  );
}
