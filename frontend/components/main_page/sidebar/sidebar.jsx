import React from 'react';

// import SidebarHeader from './sidebar_header';
// import TeamIndexContainer from './team_index_container';
import ChannelIndexContainer from './channel_index_container';
import DirectIndexContainer from './direct_index_container';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick() {
    this.props.closeModal();
    this.props.logout();
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
        <div className="sidebar-header">
          <div className="sidebar-header-div">
            <h3 className="team-name">{team.name}</h3>
            <button onClick={() => this.handleClick()} className="logout">logout</button>
          </div>
          <div className="sidebar-user">
            <span>hey, {currentUser.username}</span>
          </div>
        </div>

        <div className="sidebar-body">
          <input type="text" className="jump" placeholder="Jump to..." />
          <div className="all"> 
            <i className="fas fa-align-left"></i>
            <span className="all-unreads">All Unreads</span>
          </div>

          <div className="all">
            <i className="far fa-comments"></i>
            <span className="all-threads">All Threads</span>
          </div>

          <ChannelIndexContainer 
            teamId={team.id} 
            channelId={channelId}
            currentUser={currentUser}
          />

          {/* <DirectIndexContainer
            teamId={team.id}
            directId={directId}
            currentUser={currentUser}
          /> */}
        </div>
      </div>
    )
  }
}

export default Sidebar;