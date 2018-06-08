import React from 'react';
import Sidebar from './sidebar/sidebar';
import Chatbox from './chatbox/chatbox';

const MainPage = () => (
  <div className="main-page">
    <Sidebar />
    <Chatbox />
  </div>
)

export default MainPage;

