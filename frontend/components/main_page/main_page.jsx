import React from 'react';

import ChatboxContainer from './chatbox/chatbox_container';
import SidebarContainer from './sidebar/sidebar_container';

const MainPage = (props) => {
  const channelId = props.match.params.channelId;
  return(
  <div className="main-page">
    <SidebarContainer channelId={channelId}/>
    <ChatboxContainer channelId={channelId}/>
  </div>
)
}

export default MainPage;

