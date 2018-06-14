import React from 'react';

const SidebarHeader = (props) => {

  const handleClick = () => {
    props.closeModal();
    props.logout();
  }

  return(
    <div className="sidebar-header">
      <h3 className="team-name">{props.team.name}</h3>
      <span>{props.currentUser.username}</span>
      <button onClick={() => handleClick()}>logout</button>
      <br/>
      <input type="text" placeholder="Jump to" />
      <p> All Unreads</p>
      <p> All Threads</p>
    </div>
  );
}

export default SidebarHeader;