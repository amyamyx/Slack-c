import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../../actions/session_actions';

const msp = (state) => {
  return{
  team: {name: "Ape Academy", id: 1, creator_id: 1},
  currentUser: state.entities.users[state.session.id]
}}

const mdp = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(msp, mdp)(Sidebar);