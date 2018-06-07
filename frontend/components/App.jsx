import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import HeaderContainer from './welcome_page/header_container'
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import Home from './welcome_page/home'

import AuthRoute from '../util/route_util';

const App = () => (
  <div id="app">
    <header className="header">
      <nav className="header-nav clearfix">
        <div className="logo">
          <img src="https://a.slack-edge.com/436da/marketing/img/meta/favicon-32.png" />
          <h1>slack-c</h1>
        </div>
        <HeaderContainer/>
      </nav>
    </header>
    
    <Switch>
      <AuthRoute path="/signup" exact component={SignupContainer} />
      <AuthRoute path="/login" exact component={LoginContainer} />
      <Route path="/" exact component={Home}/>
    </Switch>

  </div>
)

export default withRouter(App);