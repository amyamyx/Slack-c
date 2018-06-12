import React from 'react';
import ReactDOM from 'react-dom';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "", purpose: "", public: true}
    this.publicVisible = "";
    this.privateVisible = "invisible";
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleInput(type){
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    const { team } = this.props;
    e.preventDefault();
    this.props.createChannel(team.id, this.state);
  }

  handleClick(e) {
    e.preventDefault();
    const form = document.getElementsByClassName('channel-form-div')[0];
    form.classList.add('invisible');
  }

  changeVisibility() {
    if (this.state.public) {
      this.publicVisible = "invisible";
      this.privateVisible = "";
    } else {
      this.publicVisible = "";
      this.privateVisible = "invisible";
    }
  }

  handleToggle(e) {
    this.setState({public: !this.state.public})
    this.changeVisibility()
  }

  render() {
    return (
      <div className="channel-form" ref={el => this.form}>

        <button className="esc-btn" onClick={this.handleClick}>
          <span className="x">X</span>
          <br/>
          <span>esc</span>
        </button>
        <h2>Create a <span className={`private ${this.privateVisible}`}>private</span> channel</h2>
        <p>Channels are where your members communicate. They're best when organized around a topic -- #leads, for example.</p>

        <form onSubmit={this.handleSubmit}>
          <div className="channel-form-switch">
            <label className="switch">
              <input type="checkbox" 
                checked={this.state.public}
                onChange={this.handleToggle}
              />  
              <span className="slider">
                <p className="toggle toggle-public">Public</p> 
                <p className="toggle toggle-private" >Private</p>
              </span>
            </label>
            <p className={`public-text public ${this.publicVisible}`}>Anyone in your workspace can view and join this channel.</p>
            <p className={`public-text private ${this.privateVisible}`}>This channel can only be joined or viewd by invite.</p>
          </div>

          <div className="channel-form-name">
            <label className="channel-form-label">Name</label>
            <div>
              <span className={`channel-icon public ${this.publicVisible}`}>#</span>
              <span className={`channel-icon private ${this.privateVisible}`}>m</span>
              <input 
                type="text"
                value={this.state.name}
                placeholder="e.g.leads"
                onChange={this.handleInput('name')}
              />
            </div>
            <p> Names must be lowercase, without spaces or periods, and shorter than 22 characters.</p>
          </div>

          <div>
          <label className="channel-form-label">Purpose <span>(optional)</span></label>
            <input
              type="text"
              value={this.state.purpose}
              onChange={this.handleInput('purpose')}
            />
            <p>What's this channel about?</p>
          </div>

          <div>
          <label className="channel-form-label">Send Invites to: <span>(optional)</span></label>
            <input
              type="text"
            />
          </div>
          <button onClick={this.handleClick}>Cancel</button>
          <button type="submit">Create Channel</button>
        </form>
      </div>
    )
  }
}
export default ChannelForm;