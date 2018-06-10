import React from 'react';
import ChatboxHeader from './chatbox_header';
import MessageFormContainer from './message_form_container';
import MessageIndexContainer from './message_index_container';

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount(){
    this.props.fetchChannel(this.props.channelId)
  }

  render(){
    return(
      <div className="chatbox">
        <ChatboxHeader
          channelId={this.props.channelId}
        />
        <MessageIndexContainer />

        <p>I</p>
        <p>am</p>
        <p>THE</p>
        <p>chatbox</p>
        <MessageFormContainer />
      </div>
    )
  }
}

export default Chatbox;