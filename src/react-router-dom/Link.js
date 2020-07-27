import React, { useContext } from 'react';
import RouterContext from './RouterContext.js';

export default function Link(props) {
  let routerContext = useContext(RouterContext);

  return (
    <a onClick={() => routerContext.history.push(props.to)}>{props.children}</a>
  );
}
