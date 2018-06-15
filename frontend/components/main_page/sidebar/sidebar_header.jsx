import React from 'react';

const SidebarHeader = (props) => {
  return(
    <div className="sidebar-header">
      <h3>{props.team.name}</h3>
      {/* <span>{props.entities.users[props.session.id].username}</span> */}
      <span>{props.currentUser.username}</span>
      <br/>
      <input type="text" placeholder="Jump to" />
      <p> All Unreads</p>
      <p> All Threads</p>
    </div>
  );
}

export default SidebarHeader;