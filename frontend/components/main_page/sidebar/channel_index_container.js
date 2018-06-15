import { connect } from 'react-redux';
import { merge } from 'lodash';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { fetchChannels, fetchJoinedChannels } from '../../../actions/channel_actions';
import { receiveProps } from '../../../actions/ui_props_actions';
import ChannelIndex from './channel_index';

const msp = (state, ownProps) => {
  const joinedChannels = Object.values(state.entities.joinedChannels) || new Array();
  const hasModal = !!state.ui.modal
  const props = merge({}, ownProps, { joinedChannels, hasModal } )
  return props;
}
 
const mdp = dispatch => ({
  fetchJoinedChannels: (teamId, userId) => dispatch(fetchJoinedChannels(teamId, userId)),
  fetchChannels: teamId => dispatch(fetchChannels(teamId)),
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal)),
  receiveProps: obj => dispatch(receiveProps(obj))
})

export default connect(
  msp, mdp
)(ChannelIndex);