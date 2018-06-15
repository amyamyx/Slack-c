import { connect } from 'react-redux';
import MessageIndex from './message_index';
import { fetchChannel } from '../../../actions/channel_actions';

const msp = state => ({
  messages: Object.values(state.entities.messages)
})

const mdp = dispatch => ({
  fetchChannel: channelId => dispatch(fetchChannel(channelId))
})

export default connect(
  msp, mdp
)(MessageIndex)