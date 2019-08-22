import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as APIUtil from './util/session_api_util';
import { createFollow, deleteFollow} from './actions/follow_actions'
import {editBand, editUser} from './actions/entities_actions';
import {createPurchase} from './actions/purchase_actions';
document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser){
    preloadedState = {
      entities: { users: { [window.currentUser.id]: window.currentUser}},
      errors: {session: []},
      session: {id: window.currentUser.id}
    };
  }
  const store = configureStore(preloadedState);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createFollow = createFollow;
  window.deleteFollow = deleteFollow;
  window.editBand = editBand;
  window.editUser = editUser;
  window.createPurchase = createPurchase;
  ReactDOM.render(<Root store={store} />, root);
});