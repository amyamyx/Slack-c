import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../../actions/session_actions';
import { closeModal } from '../../../actions/modal_actions';

const msp = (state, ownProps) => {
  // debugger;
  return{
  team: {name: "Ape Academy", id: 1, creator_id: 1},
  currentUser: state.entities.users[state.session.id],
  channelId: ownProps.channelId
}}

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(Sidebar);