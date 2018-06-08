import React from 'react';

const SidebarHeader = (props) => (
  <div className="sidebar-header">
    <h3>Ape Academy</h3>
    {/* <span>{props.entities.users[props.session.id].username}</span> */}
    <span>hongkong3345678</span>
    <input type="text" placeholder="Jump to" />
    <p> All Unreads</p>
    <p> All Threads</p>
  </div>
);

export default SidebarHeader;