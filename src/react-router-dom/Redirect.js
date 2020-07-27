import { useContext } from 'react';
import RouterContext from './RouterContext.js';

export default function Redirect(props) {
  let routerContext = useContext(RouterContext);
  let { from, to } = props;
  let pathname = routerContext.location.pathname;

  if (!from || from === pathname) {
    routerContext.history.push(to);
  }
  return null;
}
