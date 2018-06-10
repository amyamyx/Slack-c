import React from 'react';

import SidebarHeader from './sidebar_header';
// import TeamIndexContainer from './team_index_container';
import ChannelIndexContainer from './channel_index_container';
// import DirectIndexContainer from './direct_index_container';


class Sidebar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="sidebar">
        {/* <TeamIndexContainer/> */}

        <SidebarHeader team={this.props.team} currentUser={this.props.currentUser}  />

        <ChannelIndexContainer />
        {/* <DirectIndexContainer/> */}

        <ul>
          <li>I</li>
          <li>am</li>
          <li>the</li>
          <li>sidebar</li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;