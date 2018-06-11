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
    const { channelId, fetchChannel } = this.props;
    // this.props.fetchChannel(channelId);
    this.createConnection( channelId, fetchChannel)
    console.log(this.index.scrollTop);
    console.log(this.index.scrollHeight);
    this.scrollToBottom();
  }

  componentDidUpdate(){
    console.log(this.index.scrollTop);
    console.log(this.index.scrollHeight);
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