import React from 'react';
import MemberIndexItem from './member_index_item';

const MemberIndex = (props) => {
  const { members, closeModal, channel } = props;
  let plural = members.length === 1 ? "Member" : "Members"
  return (
    <div className="member-index">
      <div className="member-index-header">
        {/* @Todo */}
        <h3> About # {channel.name} </h3>
        <span className="close-x" onClick={closeModal}>x</span>
      </div>

      <div className="member-index-info">
        <div className="member-index-info-left">
          <i className="fal fa-info-circle info-circle-icon"></i>
          <span className="channel-detail"> Channel Details</span>
        </div>
      </div>

      <div className="member-count-title">
        <div className="member-count-icon"><i className="far fa-user"></i> </div>
        <div className="member-count"><span>{`${members.length} ${plural}`} </span></div>
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