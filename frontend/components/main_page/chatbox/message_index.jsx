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
 
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.channelId !== nextProps.channelId) {
  //     this.props.fetchChannel(nextProps.channelId)
  //   }
  // }

  componentDidMount(){
    const { channelId, fetchChannel } = this.props;
    this.createConnection( channelId, fetchChannel)
    this.scrollToBottom();
  }

  componentDidUpdate(){
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
  
  creator(){
    const { users, channel } = this.props;
    const creator= users[channel.creatorId]
    return creator ? creator.username : "";
  }

  purpose() {
    const { channel } = this.props;
    return channel.purpose ? `Purpose: ${channel.purpose}` : "";
  }

  scrollToBottom(){
    const index = ReactDOM.findDOMNode(this.index)
    if (index) index.scrollTop = index.scrollHeight;
  }

  render(){
    const { messages, users, channel } = this.props;
    const list = (
      messages.map( message => {
        const username = users[message.userId].username;
        return (
          <MessageIndexItem
            key={message.id}
            message={message}
            username={username}
          />
        );
      })
    );

    return (
      <div className="message-index" ref={el => { this.index = el }}>
        <ul className="message-list">
          <h2># {channel.name} </h2>
          <p>@{this.creator()} created this channel. This is the very 
            beginning of the # {channel.name} channel. {this.purpose()}</p>
          {list}
        </ul>
      </div>
    )
  }
}

export default MessageIndex;