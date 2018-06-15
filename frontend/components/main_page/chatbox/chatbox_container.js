import { connect } from 'react-redux';
import Chatbox from './chatbox';
import { fetchChannel } from '../../../actions/channel_actions';

const msp = state => ({
  channelId: 1
})

const mdp = dispatch => ({
  fetchChannel: channelId => dispatch(fetchChannel(channelId))
})

export default connect(msp, mdp)(Chatbox);