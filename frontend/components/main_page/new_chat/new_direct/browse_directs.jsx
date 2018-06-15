import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../../actions/user_actions';

class BrowseDirect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: []};
  }
  render() {
    return (
      <div className="browse-direct">
        <ul>
          existing direct chats
        </ul>

        <ul>
          <li>search users to join a DM</li>
          <li> list of all users</li>
          <li> local state is a list of members</li>
          
        </ul>

        <button>Create a DM</button>
      </div>
    )
  }

}

const msp = (state, ownProps) => {
  return {
    
  }
}

const mdp = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  msp, mdp
)(BrowseDirect);