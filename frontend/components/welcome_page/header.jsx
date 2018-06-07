import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  // debugger;
  let show;
  if (props.currentUser) {
    show = (
      <div className="logged-in">
        <p>hi, {props.currentUser.username}!</p>
        <button onClick={props.logout}>logout</button>
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
    <div className="greetings">{show}</div>
  )
}

export default Header;