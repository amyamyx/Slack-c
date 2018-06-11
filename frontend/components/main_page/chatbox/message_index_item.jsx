import React from 'react';

const MessageIndexItem = (props) => (
  <div className="message-index-item">
    <li className="message-list-item">

      <div className="profile-img">
        <img src="https://ca.slack-edge.com/T03GU501J-UA6JSERR7-g1b4a397939b-48" alt=""/>
      </div>

      <div className="message-right">

        <div className="name-time">
          <span className="sender">{props.message.userId}</span>
          <span className="send-time">{props.message.createdAt}</span>
        </div>
        
        <div className="message-content">
          {props.message.content}
        </div>

      </div>
    </li>
  </div>
)

export default MessageIndexItem;