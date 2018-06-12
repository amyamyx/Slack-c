import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
  errors: state.errors,
  formType: "Sign Up",
  errors: state.errors.session
})

const mdp = dispatch => ({
  action: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  login: user => dispatch(login(user))
})

export default connect(
  msp, mdp
)(SessionForm);