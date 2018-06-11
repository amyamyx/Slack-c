import React from 'react';
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchChannels(this.props.teamId);
  }

  render() {
    return (
      <div className="sidebar-channel-index">
        {this.props.channels.map((channel, idx) => (
          <ChannelIndexItem key={idx} channel={channel}/>
        ))}
      </div>
    )
  }
}


export default ChannelIndex;