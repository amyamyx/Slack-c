import React from 'react';
import ActionCable from 'actioncable';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.message;
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e){
    e.preventDefault();
    this.setState({content: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createMessage(this.props.channelId, this.state);
    this.setState({content: ""});
  }

  render(){
    return (
      <div className="message-form">
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.content}
            onChange={this.handleInput}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}

export default MessageForm;