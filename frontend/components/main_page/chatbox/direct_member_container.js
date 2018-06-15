import { connect } from 'react-redux';
import MemberIndex from './member_index';
import { closeModal } from '../../../actions/modal_actions';

const msp = state => ({
  members: Object.values(state.entities.directMembers)
})

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(
  msp, mdp
)(MemberIndex);