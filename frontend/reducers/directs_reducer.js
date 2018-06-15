import { 
  RECEIVE_ALL_DIRECTS, RECEIVE_DIRECT
} from '../actions/direct_actions';
import { merge } from 'lodash';

const directsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_DIRECTS:
      return action.directs;
    case RECEIVE_DIRECT:
      return merge({}, state, { [action.payload.direct.id]: action.payload.direct})
    default:
      return state;
  }
}

export default directsReducer;