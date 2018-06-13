import React from 'react';
import MemberIndexItem from './member_index_item';

const MemberIndex = (props) => {
  const { members, closeModal } = props;
  return (
    <div className="member-index">

      <div className="member-index-header">
        {/* @Todo */}
        <h3> About # general </h3>
        <span className="close-x" onClick={closeModal}>x</span>
      </div>

      <div className="member-index-info">
        <div className="member-index-info-left">
          <img className="info-circle-icon" src="https://png.pngtree.com/element_our/md/20180314/md_5aa8fceea1b8e.png" />
          <span className="channel-detail"> Channel Details</span>
        </div>
      </div>

      <div className="member-count-title">
        {/* @Todo */}
        <div className="member-count-icon"><i className="far fa-user"></i> </div>
        <div className="member-count"><span>1 Member</span></div>
      </div>

      <div className="member-index-list">
        {members.map(member => (
          <MemberIndexItem key={member.id} member={member} />
        ))}
      </div>

    </div>
  )
}

export default MemberIndex;