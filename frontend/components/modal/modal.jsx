import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import ChannelMemberContainer from '../main_page/chatbox/channel_member_container';

const Modal = ({ modal, closeModal }) => {
  // debugger;
  if (!modal) null;
  let component;
  switch (modal) {
    case 'channel':
      component = <ChannelMemberContainer/>;
    // case 'direct':
    //   component = <DirectMemberContainer/>;
    default:
      return null;
  }

  return (
    <div>
      <div>
        { component }
      </div>
    </div>
  )
}

const msp = state => ({
  modal: state.ui.modal
})

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(
  msp, mdp
)(Modal)