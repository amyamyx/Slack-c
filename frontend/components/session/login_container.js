import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
  errors: state.errors,
  formType: "Sign in",
  errors: state.errors.session
})

const mdp = dispatch => ({
  action: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  login: user => dispatch(login(user))
})

export default connect(
  msp, mdp
)(SessionForm);