import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//test api request
// import { signup, login, logout } from './util/session_api_util';
//test session actions
import { signup, login, logout, clearErrors } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //test api request and session actions
  // window.signup = signup;
  // window.login = login;
  window.logout = logout;
  // window.clearErrors = clearErrors;

  //test store and reducers
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //

  ReactDOM.render(<Root store={ store }/>, root);
});