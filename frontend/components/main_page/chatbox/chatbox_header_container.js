import { connect } from 'react-redux';
import ChatboxHeader from './chatbox_header';
import { deleteChannel } from '../../../actions/channel_actions';

const msp = (state, ownProps) => {
  console.log("chatboxheader", state);
  return {
    channel: state.entities.channels[ownProps.channelId]
  }
}

const mdp = dispatch => ({
  deleteChannel: channelId => dispatch(deleteChannel(channelId))
})


export default connect(msp, mdp)(ChatboxHeader);