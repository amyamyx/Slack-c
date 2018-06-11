import React from 'react';
import MessageIndexItem from './message_index_item';
import ReactDOM from 'react-dom';
import Cable from 'actioncable';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: this.props.messages };
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount(){
    this.props.fetchChannel(this.props.channelId);
    this.createConnection( this.props.channelId, this.props.fetchChannel)
    this.scrollToBottom();
  }
  componentDidUpdeate(){
    this.scrollToBottom();
  }

  createConnection(channelId, fetchChannel) {
    const connection = Cable.createConsumer();
    connection.subscriptions.create({
      channel: 'ChatChannel',
      room: `Channel-${channelId}`
    }, {
      connected: function() {console.log("connected")},
      disconnected: function() {},
      received: () => {
        fetchChannel(channelId)
      },
    });
  };
  
  scrollToBottom(){
    const index = ReactDOM.findDOMNode(this.index)
    if (index) index.scrollTop = index.scrollHeight;
  }

  render(){
    return (
      <div className="message-index" ref={el => { this.index = el }}>
        <ul className="message-list">
          {this.props.messages.map( message => (
            <MessageIndexItem key={message.id} message={message}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default MessageIndex;