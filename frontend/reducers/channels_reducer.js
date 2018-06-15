import {
  RECEIVE_ALL_CHANNELS,
  RECEIVE_CHANNEL,
  REMOVE_CHANNEL
} from '../actions/channel_actions';
import { merge } from 'lodash';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return action.payload;
    case RECEIVE_CHANNEL:
      return merge({}, state, { [action.payload.channel.id]: action.payload.channel});
    case REMOVE_CHANNEL:
      let newState = merge({}, state);
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}

export default channelsReducer;