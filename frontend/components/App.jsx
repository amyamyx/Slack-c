import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


// import Modal from './modal/modal';
import Home from './welcome_page/home'
import MainPage from './main_page/main_page';
import BrowseChannels from './main_page/new_chat/new_channel/browse_channels';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import ChannelFormContainer from './main_page/new_chat/new_channel/channel_form_container';


const App = () => (
  <div id="app">
    {/* <Modal /> */}

    <Switch>
      <AuthRoute path="/signup" exact component={SignupContainer} />
      <AuthRoute path="/login" exact component={LoginContainer} />
      <ProtectedRoute path="/channels/:channelId" exact component={MainPage} />
      <ProtectedRoute path="/newChannel" exact component={ChannelFormContainer} />
      <ProtectedRoute path="/channels" exact component={BrowseChannels} />
      <AuthRoute path="/" exact component={Home}/>
      <Redirect from="*" to="/"/>
    </Switch>
  </div>
)

export default App;