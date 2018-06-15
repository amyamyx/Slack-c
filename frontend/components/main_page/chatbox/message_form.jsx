import React from 'react';
import ActionCable from 'actioncable';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.message;
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({content: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage(this.props.channelId, this.state);
    this.setState({content: ""});
  }

  handleKeyPress(e) {
    if (e.key === "Enter" && e.shiftKey === false) {
      this.handleSubmit(e);
    }
  }

  render(){

    return (
      <div className="message-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <div className="plus-icon"><i className="fal fa-plus"></i></div>
            <textarea
              value={this.state.content}
              onChange={this.handleInput}
              onKeyPress={this.handleKeyPress}
              placeholder={`Message # ${this.props.channel}`}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default MessageForm;