import React from 'react';

import SidebarHeader from './sidebar_header';
// import TeamIndexContainer from './team_index_container';
import ChannelIndexContainer from './channel_index_container';
// import DirectIndexContainer from './direct_index_container';


const Sidebar = () => (
  <div className="sidebar">
    {/* <TeamIndexContainer/> */}

    <SidebarHeader/>
    
    <ChannelIndexContainer/>
    {/* <DirectIndexContainer/> */}

    <ul>
      <li>I</li>
      <li>am</li>
      <li>the</li>
      <li>sidebar</li>
    </ul>
  </div>
);

export default Sidebar;