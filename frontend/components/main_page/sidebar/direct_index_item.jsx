import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDirectMemberships } from '../../../actions/membership_actions';

class DirectIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {memberships: this.props.memberships}
  }

  componentDidMount() {
    const { fetchDirectMemberships, directId } = this.props;
    fetchDirectMemberships(directId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.memberships.length !== nextProps.memberships.length) {
      this.setState(nextProps.memberships)
    }
  }

  members(){
    const { memberships, users} = this.props;

    const members = new Array();
    memberships.forEach( el => {
      if (this.notSelf(el.userId)) {
        members.push(users[el.userId].username)
      }
    })

    return members.join(", ")
  }

  notSelf(userId) {
    const { currentUser, users } = this.props
    return (userId !== currentUser.id && users[userId])
  }

  render() {
    
    return (
      <div className="direct-index-item">
        <Link 
          to={`directs/${this.props.directId}`} 
          className="direct-index-link">
          {this.members()}
        </Link>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  const users = state.entities.users;
  const memberships = Object.values(state.entities.directMemberships) || [];

  return {
    directId: ownProps.directId,
    currentUser: state.entities.users[state.session.id],
    memberships,
    users
  }
}

const mdp = dispatch => {
  return {
    fetchDirectMemberships: directId => dispatch(fetchDirectMemberships(directId))
  }
}

export default connect(
  msp, mdp
)(DirectIndexItem);