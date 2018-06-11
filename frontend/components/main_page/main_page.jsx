import React from 'react';

import ChatboxContainer from './chatbox/chatbox_container';
import SidebarContainer from './sidebar/sidebar_container';

const MainPage = (props) => {
  console.log(props)
  const channelId = props.match.params.channelId;
  return(
  <div className="main-page">
    <SidebarContainer />
    <ChatboxContainer channelId={channelId}/>
  </div>
)
}

export default MainPage;

