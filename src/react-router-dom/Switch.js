import { useContext } from 'react';
import RouterContext from './RouterContext.js';
import { pathToRegexp } from 'path-to-regexp';

export default function Switch(props) {
  let routerContext = useContext(RouterContext);
  let children = props.children;
  let pathname = routerContext.location.pathname;

  children = Array.isArray(children) ? children : [children];

  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    let { path = '/', exact = false } = child.props;
    let reg = pathToRegexp(path, [], { end: exact });
    let matched = pathname.match(reg);

    if (matched) return child;
  }

  return null;
}
