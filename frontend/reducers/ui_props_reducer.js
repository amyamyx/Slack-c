import { CLOSE_MODAL } from '../actions/modal_actions'
import { RECEIVE_UI_PROPS } from '../actions/ui_props_actions';

const uiPropsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_UI_PROPS:
      return action.props
    case CLOSE_MODAL:
      return {};
    default:
      return state;
  }
}

export default uiPropsReducer;