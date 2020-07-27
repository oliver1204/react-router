import React from 'react';
import { Route, Link } from '../react-router-dom';

export default function NavLink(props) {
  let { to, exact, children } = props;
  return (
    <Route
      path={to}
      exact={exact}
      children={(routerProps) => (
        <Link className={routerProps.match ? 'active' : ''} to={to}>
          {children}
        </Link>
      )}
    ></Route>
  );
}
