import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../../actions/session_actions';
import { closeModal } from '../../../actions/modal_actions';

const msp = (state, ownProps) => {
  const { currentUser, team, channelId } = ownProps
  return { currentUser, team, channelId };
}

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(Sidebar);