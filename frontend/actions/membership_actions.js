import * as MembershipAPIUtil from '../util/membership_api_util';
import { receiveChannel } from '../actions/channel_actions';

export const createChannelMembership = (channelId, userId) => dispatch => (
  MembershipAPIUtil.createChannelMembership(channelId, userId)
    .then(payload => dispatch(receiveChannel(payload)))
)


// export const fetchUserDirectMemberships = teamId => dispatch => (
//   MembershipAPIUtil.fetchUserDirectMemberships(teamId)
//     .then(directMemberships => dispatch(receiveDirectMemberships(directMemberships)))
// )

export const fetchDirectMemberships = directId => dispatch => (
  MembershipAPIUtil.fetchDirectMemberships(directId)
    .then(directMemberships => dispatch(receiveDirectMemberships(directMemberships)))
)

export const RECEIVE_DIRECT_MEMBERSHIPS = 'RECEIVE_DIRECT_MEMBERSHIPS';
 
const receiveDirectMemberships = directMemberships => ({
  type: RECEIVE_DIRECT_MEMBERSHIPS,
  directMemberships
})