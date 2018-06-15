import React from 'react';

import SidebarHeader from './sidebar_header';
// import TeamIndexContainer from './team_index_container';
import ChannelIndexContainer from './channel_index_container';
import DirectIndexContainer from './direct_index_container';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    const { 
      team,
      directId, 
      channelId, 
      currentUser,
      logout, 
      closeModal
     } = this.props;

    return (
      <div className="sidebar">
        {/* <TeamIndexContainer/> */}

        <SidebarHeader 
          team={team} 
          currentUser={currentUser} 
          closeModal={closeModal}
          logout={logout}
        />

        <ChannelIndexContainer 
          teamId={team.id} 
          channelId={channelId}
          currentUser={currentUser}
        />

        <DirectIndexContainer
          teamId={team.id}
          directId={directId}
          currentUser={currentUser}
        />
      </div>
    )
  }
}

export default Sidebar;