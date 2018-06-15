import React from 'react';

const ChannelIndexItem = (props) => (
  <div className="channel-index-item">
    <span> # {props.channel.name}</span>
  </div>
)

export default ChannelIndexItem;