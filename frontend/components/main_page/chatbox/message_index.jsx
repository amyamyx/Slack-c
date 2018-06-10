import React from 'react';
import MessageIndexItem from './message_index_item';
import ReactDOM from 'react-dom';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: this.props.messages };
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount(){
    //Needs to modify
    this.props.fetchChannel(1);
    //
    this.scrollToBottom();
  }
  componentDidUpdeate(){
    this.scrollToBottom();
  }
  
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