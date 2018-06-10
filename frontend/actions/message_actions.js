import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const createChannelMessage = (channelId, message) => dispatch => (
  MessageAPIUtil.createChannelMessage(channelId, message)
                .then(message => dispatch(receiveMessage(message)))
)

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
})