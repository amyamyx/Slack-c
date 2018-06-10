import { connect } from 'react-redux';
import Sidebar from './sidebar';

const msp = state => ({
  team: {name: "Ape Academy", id: 1, creator_id: 1},
  currentUser: {username: state.session.id}
})

const mdp = dispatch => ({

})

export default connect(msp, null)(Sidebar);