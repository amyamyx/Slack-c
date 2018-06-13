import React from 'react';
import { Link } from 'react-router-dom';

import SidebarHeader from './sidebar_header';
// import TeamIndexContainer from './team_index_container';
import ChannelIndexContainer from './channel_index_container';
// import DirectIndexContainer from './direct_index_container';
import ChannelFormContainer from '../new_chat/new_channel/channel_form_container';


class Sidebar extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    const { 
      team, 
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
          logout={logout}
        />

        <ChannelIndexContainer 
          teamId={team.id} 
          channelId={channelId}
          currentUser={currentUser}
        />
        <Link to="/newChannel" onClick={closeModal}><button>New Channel</button></Link>
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