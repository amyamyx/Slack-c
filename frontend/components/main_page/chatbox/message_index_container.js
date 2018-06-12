import { connect } from 'react-redux';
import MessageIndex from './message_index';
import { fetchChannel } from '../../../actions/channel_actions';
import { receiveMessage } from '../../../actions/message_actions';

const msp = ( state, ownProps ) => {
  console.log("state", state)
  console.log("ownProps", ownProps)
  return {
  channel: state.entities.channels[ownProps.channelId],
  messages: Object.values(state.entities.messages),
  users: state.entities.users
}}

const mdp = dispatch => ({
  fetchChannel: channelId => dispatch(fetchChannel(channelId)),
  receiveMessage: message => dispatch(receiveMessage(message))
})

export default connect(
  msp, mdp
)(MessageIndex);