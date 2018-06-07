import React from 'react';
import Sidebar from './sidebar/sidebar';
import Chatbox from './chatbox/chatbox';

const MainPage = () => (
  <div className="main-page">
    {/* <Sidebar /> */}
    <div className="sidebar">
      <p>I</p>
      <p>am</p>
      <p>the</p>
      <p>sidebar</p>
    </div>

    {/* <Chatbox /> */}
    <div className="chatbox">
      <p>I</p>
      <p>am</p>
      <p>THE</p>
      <p>chatbox</p>
    </div>
  </div>
)

export default MainPage;

