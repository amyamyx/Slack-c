import React from 'react';
import Sidebar from './sidebar/sidebar';
import ChatboxContainer from './chatbox/chatbox_container';
import SidebarContainer from './sidebar/sidebar_container';

const MainPage = () => (
  <div className="main-page">
    <SidebarContainer />
    <ChatboxContainer />
  </div>
)

export default MainPage;

