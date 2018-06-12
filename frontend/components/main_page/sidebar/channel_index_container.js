import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchChannels } from '../../../actions/channel_actions';
const msp = (state, ownProps) => {
  // debugger;
  return ({
    teamId: ownProps.teamId,
    channels: Object.values(state.entities.channels),
    channelId: ownProps.channelId
  })
}


const mdp = dispatch => ({
  fetchChannels: teamId => dispatch(fetchChannels(teamId))
})

export default connect(
  msp, mdp
)(ChannelIndex);