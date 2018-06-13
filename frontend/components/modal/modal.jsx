import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import ChannelMemberContainer from '../main_page/chatbox/channel_member_container';

const msp = state => ({
  modal: state.ui.modal
})

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null
  };

  let component;
  switch (modal) {
    case 'channel':
      component = (<ChannelMemberContainer/>);
      break;
    // case 'direct':
    //   component = <DirectMemberContainer/>;
    //   break;  
    default:
      return null;
  }

  return (
    <div className="modal-background">
      <div className="modal-child">
        {component}
      </div>
    </div>
  )
}

export default connect(
  msp, mdp
)(Modal)