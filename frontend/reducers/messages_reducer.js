import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import{ merge } from 'lodash';

const messagesReducer = ( state={}, action ) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_CHANNEL:
      return action.payload.messages
    default: 
      return state;
  }  
}


export default messagesReducer;
