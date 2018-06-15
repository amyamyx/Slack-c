import React from 'react';
import HeaderContainer from '../welcome_page/header_container';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
    this.setState({username: "", password:""})
  }

  handleClick(e) {
    e.preventDefault();
    this.props.login({username: "tommy", password: "asdfjkl"})
  }

  renderErrors() {
    return (
      <div className="session-errors">
        {this.props.errors.map((err, idx) => (
          <p key={idx} className="err">- {err}</p>
        ))}
      </div>
    )
  }

  render() {
    return (
      <div className="session-form-div">
        <HeaderContainer />
        <div id="session-form" className="group">
          <form className="session-form">
            
          {this.renderErrors()}
            <div className="form-title">
              <h1>{this.props.formType} to Appp Academy</h1>
              <p>apppacademy.slack-c.com</p>
            </div>

            <p className="label"> Enter your <span>username</span> and <span>password</span></p>
            <input
              type="text"
              className="session-input group"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
            <br />
            <input
              type="password"
              className="session-input group"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
            <br />
            <button className="session-button group" onClick={this.handleSubmit}><span>{this.props.formType}</span></button>
            <div className="checkbox">
              <input type="checkbox" className="checkbox-input" />
              <span>Remember me</span>
              <button className="demo-login" onClick={this.handleClick}>Demo login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SessionForm;