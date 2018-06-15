import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';
import{ merge } from 'lodash';

const messagesReducer = ( state={}, action ) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_CHANNEL:
      return action.payload.messages
    case RECEIVE_MESSAGE:
      return merge({}, state, { [action.message.id]: action.message });
    default: 
      return state;
  }  
}


export default messagesReducer;
