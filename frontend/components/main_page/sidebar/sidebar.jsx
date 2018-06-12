import React from 'react';

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
        <button onClick={this.handleClick}>New Channel</button>
        <div className={`channel-form-div ${this.formVisibility}`}>
          <ChannelFormContainer/>
        </div>
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