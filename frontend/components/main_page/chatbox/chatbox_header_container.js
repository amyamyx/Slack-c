import { connect } from 'react-redux';
import ChatboxHeader from './chatbox_header';
import { deleteChannel } from '../../../actions/channel_actions';

const msp = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.channelId],
    channelMembers: Object.values(state.entities.channelMembers)
  }
}

const mdp = dispatch => ({
  deleteChannel: channelId => dispatch(deleteChannel(channelId))
})


export default connect(msp, mdp)(ChatboxHeader);