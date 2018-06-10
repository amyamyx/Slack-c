import React from 'react';

const MessageIndexItem = (props) => (
  <div className="message-index-item">
    <li>
      {props.message.userId}
      <br/>
      {props.message.content}
      <br/>
      {props.message.createdAt}
    </li>
  </div>
)

export default MessageIndexItem;