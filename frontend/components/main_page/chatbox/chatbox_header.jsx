import React from 'react';

const ChatboxHeader = (props) => {
  const { 
    modal,
    channel,
    openModal,
    currentId,
    channelMembers,
    deleteChannel 
  } = props;

  // debugger;
  
  if (!channel) {
    return null;
  }
  
  let button;
  if (currentId === channel.creatorId) {
    button = (
      <button onClick={() => deleteChannel(channel.id)}>delete channel</button>
    )
  } else {
    button = (
      <div></div>
    );
  }
  return (
  <div className="chatbox-header">
    
    <div className="chatbox-header-left">
      <h3> # {props.channel.name} </h3>
        <h5 className="header-member" onClick={() => openModal("channel")}>
        <i className="far fa-user"></i> 
          {` ${props.channelMembers.length}` }
      </h5>
    </div>

    <div className="chatbox-header-right">
      { button }
        <div className="info-circle icon" onClick={() => openModal("channel")}>
        <img className="info-circle-icon" src="https://png.pngtree.com/element_our/md/20180314/md_5aa8fceea1b8e.png"/>
      </div>

      <div className="cog icon">
        <i className="fas fa-cog"></i>
      </div>
      
      <div className="chatbox-header-search">
        <div className="search-icon"><i className="fas fa-search"></i></div>
        <input type="search" placeholder="Search"/>
      </div>

    </div>
    
  </div>
)
}

export default ChatboxHeader;