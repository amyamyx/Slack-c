import { connect } from 'react-redux';
import ChatboxHeader from './chatbox_header';
import { deleteChannel } from '../../../actions/channel_actions';
import { openModal } from '../../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.channelId],
    channelMembers: Object.values(state.entities.channelMembers),
    modal: state.ui.modal,
    currentId: state.session.id
  }
}

const mdp = dispatch => ({
  deleteChannel: channelId => dispatch(deleteChannel(channelId)),
  openModal: modal => dispatch(openModal(modal))
})


export default connect(msp, mdp)(ChatboxHeader);