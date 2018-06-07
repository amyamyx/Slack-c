import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
  errors: state.errors,
  formType: "Log In",
  errors: state.errors.session
})

const mdp = dispatch => ({
  action: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(
  msp, mdp
)(SessionForm);