import MessageForm from './message_form';
import { connect } from 'react-redux';
import { createChannelMessage } from '../../../actions/message_actions';
import { fetchChannel } from '../../../actions/channel_actions';

const msp = (state, ownProps) => {
  return ({
    message: {content: ""},
    channel: state.entities.channels[ownProps.channelId],
    hasModal: state.ui.modal
  })
}

const mdp = dispatch => ({
  // actions to create channel and direct messages
  createMessage: (channelId, messageForm) => dispatch(createChannelMessage(channelId,messageForm)),
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
})

export default connect(
  msp, mdp
)(MessageForm);
