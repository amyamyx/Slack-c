import { connect } from 'react-redux';
import Chatbox from './chatbox';
import { fetchChannel } from '../../../actions/channel_actions';
import { fetchUsers } from '../../../actions/user_actions';

const msp = (state, ownProps) => {
  return {
  channelId: ownProps.channelId
}}

const mdp = dispatch => ({
  fetchChannel: channelId => dispatch(fetchChannel(channelId)), 
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(msp, mdp)(Chatbox);