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
  
  const handleDelete = (e) => {
    deleteChannel(channel.id).then(() => props.history.push('/channels/1'))
  }

  const handleClick = () => {
    props.openModal("channel");
    props.receiveProps(channel.id);
  }

  if (!channel) {
    return null;
  }
  
  let button;
  if (currentId === channel.creatorId) {
    button = (
      <button onClick={(e) => handleDelete(e)}>delete channel</button>
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
        <h5 className="header-member" onClick={handleClick}>
        <i className="far fa-user"></i> 
          {` ${props.channelMembers.length}` }
      </h5>
    </div>

    <div className="chatbox-header-right">
      { button }
      <div className="info-circle icon" onClick={handleClick}>
        <i className="fal fa-info-circle info-circle-icon"></i>
      </div>

      <div className="cog icon">
        <i className="fal fa-cog"></i>
      </div>
      
      <div className="chatbox-header-search">
        <div className="search-icon"><i className="far fa-search"></i></div>
        <input type="search" placeholder="Search"/>
      </div>

    </div>
    
  </div>
)
}

export default ChatboxHeader;