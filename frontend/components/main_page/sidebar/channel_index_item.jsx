import React from 'react';
import {Link} from 'react-router-dom';

const ChannelIndexItem = (props) => (
  <div className="channel-index-item">
    <Link className="item-link" to={`/channels/${props.channel.id}`}>
      <span> # {props.channel.name}</span>
    </Link>
  </div>
)

export default ChannelIndexItem;