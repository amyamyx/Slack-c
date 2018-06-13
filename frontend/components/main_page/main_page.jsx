import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';

import ChatboxContainer from './chatbox/chatbox_container';
import SidebarContainer from './sidebar/sidebar_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render () {
    return(
      <div className="main-page">
        <SidebarContainer {...this.props}/>
        <ChatboxContainer {...this.props}/>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  const defaultUser = {id: "", username: ""};
  const currentUser = state.entities.users[state.session.id];
  const channelId = ownProps.match.params.channelId;

  return {
    team: {id: 1, name: "Ape Academy"},
    currentUser,
    channelId
  }
}

const mdp = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  msp, mdp
)(MainPage);

