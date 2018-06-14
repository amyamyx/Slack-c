import * as MembershipAPIUtil from '../util/membership_api_util';
import { receiveChannel } from '../actions/channel_actions';

export const createChannelMembership = (channelId, userId) => dispatch => (
  MembershipAPIUtil.createChannelMembership(channelId, userId)
                   .then(payload => dispatch(receiveChannel(payload)))
)
