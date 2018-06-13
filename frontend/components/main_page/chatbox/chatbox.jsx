import React from 'react';
import ChatboxHeaderContainer from './chatbox_header_container';
import MessageFormContainer from './message_form_container';
import MessageIndexContainer from './message_index_container';
import Modal from '../../modal/modal';

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.fetchChannel(this.props.channelId)
              .then(this.props.fetchUsers());
  }
  
  componentWillReceiveProps(nextProps){
    if (this.props.channelId !== nextProps.channelId) {
      this.props.fetchChannel(nextProps.channelId)
    }
  }

  render(){
    const { channelId } = this.props
    return(
      <div className="chatbox">
        <ChatboxHeaderContainer
          channelId={channelId} />
        
        <MessageIndexContainer channelId={channelId}/>
        <MessageFormContainer channelId={channelId} />
        <Modal channelId={channelId}/>
      </div>
    )
  }
}

export default Chatbox;