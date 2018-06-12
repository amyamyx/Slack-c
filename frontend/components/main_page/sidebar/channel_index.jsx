import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { Link } from 'react-router-dom';

class ChannelIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchChannels(this.props.teamId);
  }

  render() {
    const { channels, channelId } = this.props;
    return (
      <div className="sidebar-channel-index">
        {channels.map((channel, idx) => (
          <Link className="item-link" to={`/channels/${channel.id}`} key={idx}>
            <ChannelIndexItem channel={channel} channelId={channelId}/>
          </Link>
        ))}
      </div>
    )
  }
}


export default ChannelIndex;