import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { Link } from 'react-router-dom';

class ChannelIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const { currentUser, teamId } = this.props;
    this.props.fetchJoinedChannels(teamId, currentUser.id);
  }

  render() {
    const { joinedChannels, channelId } = this.props;
    console.log("joinedchannels", joinedChannels);
    return (
      <div className="sidebar-channel-index">
        {joinedChannels.map((channel, idx) => (
          <Link className="item-link" to={`/channels/${channel.id}`} key={idx}>
            <ChannelIndexItem channel={channel} channelId={channelId}/>
          </Link>
        ))}
      </div>
    )
  }
}


export default ChannelIndex;