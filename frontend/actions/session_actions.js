import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const login = userForm => dispatch => (
  SessionAPI.login(userForm)
            .then( user => dispatch(receiveCurrentUser(user)), 
            res => dispatch(receiveErrors(res.responseJSON)))
)

export const signup = userForm => dispatch => (
  SessionAPI.signup(userForm)
            .then( user => dispatch(receiveCurrentUser(user)))
            .fail(res => dispatch(receiveErrors(res.responseJSON)))
)

export const logout = () => dispatch => (
  SessionAPI.logout()
            .then( () => dispatch(logoutCurrentUser()))
            .fail( res => dispatch(receiveErrors(res.responseJSON)))
)

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})


const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})