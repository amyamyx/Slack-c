import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { receiveProps } from '../../../actions/ui_props_actions';
import { fetchDirects } from '../../../actions/direct_actions';
import DirectIndex from './direct_index';

const msp = (state, ownProps) => {
  const directs = Object.values(state.entities.directs) || new Array();
  const hasModal = !!state.ui.modal;
  const { teamId, currentUser, directId } = ownProps;
  return {
    teamId,
    currentUser,
    directId,
    directs,
    hasModal
  }
}

const mdp = dispatch =>{
  return {
    fetchDirects: teamId => dispatch(fetchDirects(teamId)),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
    receiveProps: obj => dispatch(receiveProps(obj))
  }
}

export default connect(
  msp, mdp
)(DirectIndex);