import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

export const RECEIVE_JOINED_CHANNELS = 'RECEIVE_JOINED_CHANNELS'

export const fetchChannels = teamId => dispatch => (
  ChannelAPIUtil.getChannels(teamId)
                .then( channels => dispatch(receiveAllChannels(channels)))
);

export const fetchChannel = channelId => dispatch => (
  ChannelAPIUtil.getChannel(channelId)
                .then( channel => dispatch(receiveChannel(channel)))
);

export const updateChannel = channel => dispatch => (
  ChannelAPIUtil.updateChannel(channel)
                .then( channel => dispatch(receiveChannel(channel)))
);

export const createChannel = (teamId, channel) => dispatch => (
  ChannelAPIUtil.createChannel(teamId, channel)
                .then( channel => dispatch(receiveChannel(channel)))
);

export const deleteChannel = channelId => dispatch => (
  ChannelAPIUtil.deleteChannel(channelId)
                .then( channel => dispatch(removeChannel(channel.id)))
);

export const fetchJoinedChannels = (teamId, userId) => dispatch => (
  ChannelAPIUtil.fetchJoinedChannels(teamId, userId)
                .then( channels => dispatch(receiveJoinedChannels(channels)))
)
const receiveAllChannels = payload => ({
  type: RECEIVE_ALL_CHANNELS,
  payload
})

export const receiveChannel = payload => ({
  type: RECEIVE_CHANNEL,
  payload
})

const removeChannel = payload => ({
  type: REMOVE_CHANNEL,
  payload
})

const receiveJoinedChannels = channels => ({
  type: RECEIVE_JOINED_CHANNELS,
  channels
})