import { RECEIVE_DIRECT_MEMBERSHIPS } from '../actions/membership_actions';

const directMembershipsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DIRECT_MEMBERSHIPS:
      return action.directMemberships;
    default: 
      return state;
  }
}

export default directMembershipsReducer;