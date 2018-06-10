import React from 'react';
import MessageIndexItem from './message_index_item';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: this.props.messages }
  }
  componentDidMount(){
    //Needs to modify
    this.props.fetchChannel(1);
    //
  }
  

  render(){
    return (
      <div className="message-index">
        <ul>
        {this.props.messages.map( (message, idx) => (
          <li>
              <MessageIndexItem key={idx} message={message}/>
          </li>
        ))}
        </ul>
      </div>
    )
  }
}

export default MessageIndex;