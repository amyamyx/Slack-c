import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../../actions/session_actions';

const msp = (state, ownProps) => {
  const { currentUser, team, channelId } = ownProps
  return { currentUser, team, channelId };
}

const mdp = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(msp, mdp)(Sidebar);