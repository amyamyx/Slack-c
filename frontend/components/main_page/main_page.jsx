import React from 'react';
import Sidebar from './sidebar/sidebar';
import Chatbox from './chatbox/chatbox';
import SidebarContainer from './sidebar/sidebar_container';

const MainPage = () => (
  <div className="main-page">
    <SidebarContainer />
    <Chatbox />
  </div>
)

export default MainPage;

