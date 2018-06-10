import * as MessageAPIUtil from '../util/message_api_util';

import { fetchChannel } from './channel_actions'

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const createChannelMessage = (channelId, message) => dispatch => (
  MessageAPIUtil.createChannelMessage(channelId, message)
                .then(() => dispatch(fetchChannel(channelId)))
)

// dispatch another action to fetch all messages

// const receiveMessage = message => ({
//   type: RECEIVE_MESSAGE,
//   message
// })