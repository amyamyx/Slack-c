import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';


import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import Home from './welcome_page/home'
import MainPage from './main_page/main_page';
import ChannelFormContainer from './main_page/new_chat/new_channel/channel_form_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div id="app">
    {/* <Switch> */}
      <AuthRoute path="/signup" exact component={SignupContainer} />
      <AuthRoute path="/login" exact component={LoginContainer} />
      {/* <ProtectedRoute path={} exact component={MainPage} /> */}
      <ProtectedRoute path="/channels/:channelId" exact component={MainPage} />
      <ProtectedRoute path="/newChannel" exact component={ChannelFormContainer} />
      <AuthRoute path="/" exact component={Home}/>
    {/* </Switch> */}
  </div>
)

export default App;