import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import { createChannel } from '../../../../actions/channel_actions';

const msp = state => ({
  team: {id: 1, name: "Ape Academy", creator_id: 1}
  // @Todo
  // users: state.entities.users
})

const mdp = dispatch => ({
  createChannel: (teamId, channelForm) => dispatch(createChannel(teamId, channelForm))
})

export default connect(
  msp, mdp
)(ChannelForm)