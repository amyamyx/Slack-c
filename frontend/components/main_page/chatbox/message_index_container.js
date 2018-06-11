import { connect } from 'react-redux';
import MessageIndex from './message_index';
import { fetchChannel } from '../../../actions/channel_actions';
import { receiveMessage } from '../../../actions/message_actions';

const msp = ( state, ownProps ) => ({
  channelId: 1,
  messages: Object.values(state.entities.messages)
})

const mdp = dispatch => ({
  fetchChannel: channelId => dispatch(fetchChannel(channelId)),
  receiveMessage: message => dispatch(receiveMessage(message))
})

export default connect(
  msp, mdp
)(MessageIndex)