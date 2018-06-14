import React from 'react';
import { connect } from 'react-redux';
import { fetchChannels } from '../../../../actions/channel_actions';
import { createChannelMembership } from '../../../../actions/channe_membership_actions';
// import { Link } 

class BrowseChannels extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannels(1)
  }

  filterChannels(allChannels){
    const { joinedChannels } = this.props;
    const filtered = new Array();
    const joinedIds = joinedChannels.map( channel => (channel.id) )

    allChannels.forEach( channel=> {
      if (!joinedIds.includes(channel.id)) {
        filtered.push(channel)
      }
    })

    return filtered;
  }

  createChannel(e) {
    this.props.history.push('/newChannel');
  }

  handleClick(channelId) {
    const { history, currentUser, createChannelMembership } = this.props;
    return (e) => {
      createChannelMembership(channelId, currentUser.id)
        .then(() => history.push(`/channels/${channelId}`))
    }
  }

  handleClickJoined(channelId) {
    return (e) => {
      this.props.history.push(`/channels/${channelId}`)
    }
  }

  render() {
    const { channels, currentUser, joinedChannels, createChannelMembership } = this.props;
    const joinableChannels = this.filterChannels(channels);
    return (
      <div className="browse-channels">
        <div>
          <h2>Browse channels</h2>
          <button onClick={(e) => this.createChannel(e)}>Create Channel</button>
        </div>
        <ul className="joinable-channel-index">
        {joinableChannels.map( channel => (
          <li 
            key={channel.id}
            className="joinable-channel"
            onClick={this.handleClick(channel.id)}
          >
            {`# ${channel.name}`}
          </li>
        ))}
        </ul>

        <ul className="joined-channel-index">
          {joinedChannels.map( channel => (
            <li
              key={channel.id}
              className="joined-channel"
              onClick={this.handleClickJoined(channel.id)}>
              {`# ${channel.name}`}
            </li> 
          ))}
        </ul>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  const defaultChannels = new Array();
  const channels = Object.values(state.entities.channels) || defaultChannels;
  return { 
    currentUser: state.entities.users[state.session.id],
    joinedChannels: ownProps.location.state.joinedChannels, 
    channels
  }
}


const mdp = dispatch => ({
  createChannelMembership: (channelId, userId) => dispatch(createChannelMembership(channelId, userId)),
  fetchChannels: teamId => dispatch(fetchChannels(teamId))
})

export default connect(
  msp, mdp
)(BrowseChannels);