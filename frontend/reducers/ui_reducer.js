import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import uiPropsReducer from './ui_props_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  props: uiPropsReducer
})

export default uiReducer;