import React from 'react';
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchChannels(1);
  }

  render() {
    return (
      <div className="sidebar-channel-index">
        {this.props.channels.map(channel => (
          <ChannelIndexItem channel={channel} key={channel.id} />
        ))}
      </div>
    )
  }
}


export default ChannelIndex;