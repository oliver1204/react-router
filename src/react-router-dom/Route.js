import React, { useContext } from 'react';
import RouterContext from './RouterContext.js';
import { pathToRegexp } from 'path-to-regexp';

export default function Route(props) {
  let routerContext = useContext(RouterContext);
  let { component: RouteComponent, exact = false, path } = props;
  let pathname = routerContext.location.pathname;
  let keys = [];
  let regexp = pathToRegexp(path, keys, {
    end: exact,
  });
  keys = keys.map((item) => item.name);
  let matched = pathname.match(regexp);

  if (matched) {
    let [url, ...values] = matched;
    let params = values.reduce((memo, value, index) => {
      memo[keys[index]] = value;
      return memo;
    }, {});
    let match = {
      path,
      url,
      params,
      isExact: pathname === url,
    };
    let routerValue = {
      ...routerContext,
      match,
    };
    return <RouteComponent {...routerValue} />;
  } else {
    return null;
  }
}
