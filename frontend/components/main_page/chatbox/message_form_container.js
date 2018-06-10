import MessageForm from './message_form';
import { connect } from 'react-redux';
import { createMessage } from '../../../actions/message_actions';

const msp = (state, ownProps) => ({
  message: {content: ""},
  channelId: 1
})

const mdp = dispatch => ({
  // actions to create channel and direct messages
  createMessage: (channelId, messageForm) => dispatch(createChannelMessage(channelId,messageForm))
})

export default connect(
  msp, mdp
)(MessageForm);
