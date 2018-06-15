import { connect } from 'react-redux';
import { closeModal } from '../../../../actions/modal_actions';
import { fetchChannels, fetchJoinedChannels } from '../../../../actions/channel_actions';
import { createChannelMembership } from '../../../../actions/membership_actions';
import BrowseChannels from './browse_channels';

const msp = state => {
  const defaultChannels = new Array();
  const channels = Object.values(state.entities.channels) || defaultChannels;
  const joinedChannels = state.ui.props || defaultChannels;
  return {
    currentUser: state.entities.users[state.session.id],
    joinedChannels,
    channels
  }
}


const mdp = dispatch => ({
  createChannelMembership: (channelId, userId) => dispatch(createChannelMembership(channelId, userId)),
  fetchJoinedChannels: (teamId, userId) => dispatch(fetchJoinedChannels(teamId, userId)),
  fetchChannels: teamId => dispatch(fetchChannels(teamId)),
  closeModal: () => dispatch(closeModal())
})

export default connect(
  msp, mdp
)(BrowseChannels);