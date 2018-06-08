import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ loggedIn, path, exact, component: Component }) => (
  <Route 
    path={path} 
    exact={exact} 
    render={(props) => (
      !loggedIn ? <Component {...props} />  : <Redirect to="/main" />
    )}
  />
);

const Protected = ({ loggedIn, path, exact, component: Component }) => (
  <Route 
    path={path} 
    exact={exact}
    render={(props) => (
    loggedIn ? <Component {...props} /> : <Redirect to="/" />
    )}
  />
);

const msp = state => ({
  loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(connect(msp, null)(Auth));
export const ProtectedRoute = withRouter(connect(msp, null)(Protected));