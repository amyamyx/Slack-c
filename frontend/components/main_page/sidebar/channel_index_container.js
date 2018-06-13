import { connect } from 'react-redux';
import { merge } from 'lodash';
import ChannelIndex from './channel_index';
import { fetchJoinedChannels } from '../../../actions/channel_actions';

const msp = (state, ownProps) => {
  // debugger;
  const joinedChannels = Object.values(state.entities.joinedChannels);
  const props = merge({}, ownProps, { joinedChannels } )
  return props;
}
 
const mdp = dispatch => ({
  fetchJoinedChannels: (teamId, userId) => dispatch(fetchJoinedChannels(teamId, userId))
})

export default connect(
  msp, mdp
)(ChannelIndex);