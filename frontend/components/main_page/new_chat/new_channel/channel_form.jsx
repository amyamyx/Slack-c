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
    this.handleEscKey = this.handleEscKey.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscKey, true)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscKey, true)
  }

  handleEscKey(e) {
    if (e.key === "Escape") { this.props.history.go(-1) }
  }

  handleInput(type){
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    const { team } = this.props;
    e.preventDefault();
    this.props.createChannel(team.id, this.state).then(res => this.props.history.push(`/channels/${res.payload.channel.id}`))
    // @Todo
    // this.props.history.goBack();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.go(-1);
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

  checkBottonColor() {
    return this.state.name === "" ? "" : "green";
  }

  render() {

    const buttonColor = this.checkBottonColor();
    return (
      <div className="channel-form">

        <button className="esc-btn" onClick={this.handleClick}>
          <span className="x"><i className="fal fa-times"></i></span>
          <br/>
          <span>esc</span>
        </button>
        <h1>Create a <span className={`private ${this.privateVisible}`}>private</span> channel</h1>
        <p className="channel-form-des">Channels are where your members communicate. They're best when organized around a topic -- #leads, for example.</p>

        <form className="animated slideInUp the-form">

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
            <div className="channel-form-name-input">
              <span className={`channel-icon public ${this.publicVisible}`}>#</span>
              <span className={`channel-icon private ${this.privateVisible}`}>m</span>
              <input 
                type="text"
                value={this.state.name}
                placeholder="e.g.leads"
                onChange={this.handleInput('name')}
                className="name-input"
              />
            </div>
            <p className="channel-form-input-des"> Names must be lowercase, without spaces or periods, and shorter than 22 characters.</p>
          </div>

          <div>
          <label className="channel-form-label">Purpose <span>(optional)</span></label>
            <br />
            <input
              type="text"
              value={this.state.purpose}
              onChange={this.handleInput('purpose')}
              className="purpose-input"
            />
            <p className="channel-form-input-des">What's this channel about?</p>
          </div>

          <div>
          <label className="channel-form-label">Send Invites to: <span>(optional)</span></label>
            <input
              type="text"
              placeholder="Search by name"
              className="purpose-input"
            />
            <p className="channel-form-input-des">Select up to 1000 people to add to this channel.</p>
          </div>
          <div className="channel-form-buttons">
            <button onClick={this.handleClick} className="btn-channel btn-cancel">Cancel</button>
            <button onClick={this.handleSubmit} className={`btn-channel btn-create ${buttonColor}`}>Create Channel</button>
          </div>
        </form>
      </div>
    )
  }
}
export default ChannelForm;