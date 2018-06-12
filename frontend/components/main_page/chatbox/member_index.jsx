import React from 'react';
import MemberIndexItem from './member_index_item';

const MemberIndex = (props) => {
  const { members, closeModal } = props;

  return (
    <div className="member-index">
      {members.map(member => (
        <MemberIndexItem key={member.id} member={member} />
      ))}
    </div>
  )
}

export default MemberIndex;