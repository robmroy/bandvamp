import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      entities: { users: { [window.currentUser.id]: window.currentUser } },
      errors: { session: [] },
      session: { id: window.currentUser.id }
    };
  }
  const store = configureStore(preloadedState);
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);
});