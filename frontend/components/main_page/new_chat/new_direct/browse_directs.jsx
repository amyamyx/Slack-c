import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../../actions/user_actions';

class BrowseDirect extends React.Component {
  render() {
    return (
      <div className="browse-direct">

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