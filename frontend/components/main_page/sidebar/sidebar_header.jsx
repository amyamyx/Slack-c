import React from 'react';

const SidebarHeader = (props) => {

  const handleClick = () => {
    props.closeModal();
    props.logout();
  }

  return(
    <div className="sidebar-header">
      <div>
        <h3 className="team-name">{props.team.name}</h3>
        <span>{props.currentUser.username}</span>
      </div>
      <button onClick={() => handleClick()}>logout</button>
      <br/>
      <div>
      <input type="text" className="jump" placeholder="Jump to" />
      <p> All Unreads</p>
      <p> All Threads</p>
      </div>
    </div>
  );
}

export default SidebarHeader;