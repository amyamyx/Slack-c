import React from 'react';

const MessageIndexItem = (props) => (
  <div className="message-index-item">
    {props.message.userId}
    <br/>
    {props.message.content}
    <br/>
    {props.message.createdAt}
  </div>
)

export default MessageIndexItem;