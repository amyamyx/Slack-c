import { RECEIVE_JOINED_CHANNELS } from '../actions/channel_actions';

const joinedChannelsReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_JOINED_CHANNELS:
      return action.channels;
    default: 
      return state;
  }
}

export default joinedChannelsReducer;