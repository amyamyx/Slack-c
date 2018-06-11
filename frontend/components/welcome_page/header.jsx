import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  let show;
  if (props.currentUser) {
    show = (
      <div className="logged-in">
        <p className="logged-in-item">hi, {props.currentUser.username}!</p>
        <button className="logout-button logged-in-item" onClick={props.logout}>logout</button>
      </div>
    );

  } else {
    show = (
      <div className="logged-out clearfix">
        <div className="logged-out-list clearfix">
          <span>Why Slack?</span>
          <span>Pricing</span>
          <span>About Us</span>
        </div>
        <Link to="/signup" className="link" onClick={props.clearErrors}>Sign Up</Link>
        <Link to="/login" className="link" onClick={props.clearErrors}>Sign In</Link>
      </div>
    );
  }

  return (
    <div>
      <header className="header">
        <nav className="header-nav clearfix">
          <Link to="/" className="logo-link">
            <div className="logo">
              <img src="https://a.slack-edge.com/436da/marketing/img/meta/favicon-32.png" />
              <h1>slack-c</h1>
            </div>
          </Link>
          <div className="nav-list">
            {show}
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header;