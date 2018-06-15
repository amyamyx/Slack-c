import React from 'react';
import {Link} from 'react-router-dom';

const ChannelIndexItem = (props) => {
  const { channel, channelId } = props;

  let classes;
  if (channel.id == channelId) {
    classes = 'channel-index-item highlight';
  } else {
    classes = 'channel-index-item';
  }
  
  return (
    <div className={ classes }>
      <span> <span className="hashtag">#</span> {props.channel.name}</span>
    </div>
  )
}

export default ChannelIndexItem;