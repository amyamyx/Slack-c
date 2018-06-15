import { RECEIVE_CHANNEL } from '../actions/channel_actions';

const channelMembersReducer = ( state ={}, action ) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHANNEL:
      return action.payload.channelMembers;
    default:
      return state;
  }
}

export default channelMembersReducer;