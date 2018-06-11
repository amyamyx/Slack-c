import { connect } from 'react-redux';
import ChatboxHeader from './chatbox_header';

const msp = (state, ownProps) => {
  console.log("chatboxheader", state);
  return {
    channel: state.entities.channels[ownProps.channelId]
  }
}


export default connect(msp, null)(ChatboxHeader);