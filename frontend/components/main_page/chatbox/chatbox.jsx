import React from 'react';
import ChatboxHeaderContainer from './chatbox_header_container';
import MessageFormContainer from './message_form_container';
import MessageIndexContainer from './message_index_container';

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    this.props.fetchChannel(this.props.channelId)
    this.props.fetchUsers();
  }

  render(){
    const { channelId } = this.props
    return(
      <div className="chatbox">
        <ChatboxHeaderContainer
          channelId={channelId}
        />
        <MessageIndexContainer channelId={channelId}/>
        <MessageFormContainer channelId={channelId} />
      </div>
    )
  }
}

export default Chatbox;