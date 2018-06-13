import React from 'react';

const MemberIndexItem = (props) => {
  const { member } = props

  return (
    <div className="member-index-item">
      <div>
        <img className="member-img" src="https://ca.slack-edge.com/TAZPTEMRU-UAY6HS2F2-g3ea2a7c7d6d-72"/>
      </div>
      <div className="member-username">
        <span>{ member.username }</span>
      </div>
    </div>
  )
}

export default MemberIndexItem;