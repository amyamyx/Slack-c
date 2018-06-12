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
    this.handleClick = this.handleClick.bind(this);
    this.formVisibility = 'invisible';
  }

  handleClick(e) {
    this.formVisibility = '';
  }

  render(){
    return (
      <div className="sidebar">
        {/* <TeamIndexContainer/> */}

        <SidebarHeader 
          team={this.props.team} 
          currentUser={this.props.currentUser} 
          logout={this.props.logout}
        />

        <ChannelIndexContainer teamId={this.props.team.id}/>
        <Link to="/newChannel"><button>New Channel</button></Link>
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