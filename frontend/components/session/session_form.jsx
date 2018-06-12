import React from 'react';
import HeaderContainer from '../welcome_page/header_container';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((err, idx) => (
          <li key={idx}>{err}</li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <div id="session-form" className="group">
          <form onSubmit={this.handleSubmit} className="session-form">
            <h3 className="session-errors">{this.renderErrors()}</h3>
            <h1>{this.props.formType}</h1>
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
            <button className="session-button group" type="submit">{this.props.formType}</button>

          </form>
        </div>
      </div>
    )
  }
}

export default SessionForm;