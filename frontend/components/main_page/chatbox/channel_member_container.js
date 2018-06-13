import { connect } from 'react-redux';
import MemberIndex from './member_index';
import { closeModal } from '../../../actions/modal_actions';

const msp = (state, ownProps) => {
  // debugger;
  return ({
    members: Object.values(state.entities.channelMembers),
    channel: state.entities.channels[ownProps.channelId]
  })
}

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(
  msp, mdp
)(MemberIndex);