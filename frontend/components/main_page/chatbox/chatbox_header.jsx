import React from 'react';

const ChatboxHeader = (props) => {
  if (!props.channel) {
    return null;
  }
  
  return (
  <div className="chatbox-header">
    
    <div className="chatbox-header-left">
      <h3> # {props.channel.name} </h3>
      <h5 className="header-member"><i className="far fa-user"></i> 2,290</h5>
    </div>

    <div className="chatbox-header-right">
      {/* // Todo */}
      <button>delete channel</button>
      <div className="info-circle icon">
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