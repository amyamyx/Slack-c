import React from 'react';
import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions';

import BrowseChannelsContainer from '../main_page/new_chat/new_channel/browse_channels_container';
import ChannelMemberContainer from '../main_page/chatbox/channel_member_container';


const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null
  };

  let component;
  switch (modal) {
    case 'channel':
      component = (<ChannelMemberContainer/>);
      break;
    case 'joinChannel':
      component = (<BrowseChannelsContainer/>)
      break;
    // case 'direct':
    //   component = <DirectMemberContainer/>;
    //   break;  
    default:
      return null;
  }

  return (
    <div className="modal">
      {component}
    </div>
  )
}

const msp = state => ({
  modal: state.ui.modal,
  ownProps: state.ui.props
})

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(
  msp, mdp
)(Modal)
