import React from 'react';
import { Link } from 'react-router-dom';
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends React.Component{
  constructor(props){
    super(props);
    this.handleJoin = this.handleJoin.bind(this);
  }

  handleJoin() {
    this.props.openModal('joinChannel');
    this.props.receiveProps(this.props.joinedChannels);
  }

  handleModalProps(channelId) {
    if (this.props.hasModal) {
      this.props.receiveProps(channelId)
    }
  }

  componentDidMount(){
    const { currentUser, teamId } = this.props;
    this.props.fetchJoinedChannels(teamId, currentUser.id)
              .then(() => this.props.fetchChannels(teamId));
  }

  render() {
    const { joinedChannels, channelId, closeModal, openModal } = this.props;
    return (
      <div className="sidebar-channel-index">
        <h4>Channels</h4>
        {joinedChannels.map((channel, idx) => (
          <Link className="item-link" to={`/channels/${channel.id}`} key={idx} onClick={() => this.handleModalProps(channel.id)}>
            <ChannelIndexItem channel={channel} channelId={channelId} />
          </Link>
        ))}
        <Link to="/newChannel" onClick={closeModal} ><button>New Channel</button></Link>
        <button onClick={this.handleJoin}>Join Channels</button>
      </div>
    )
  }
}


export default ChannelIndex;