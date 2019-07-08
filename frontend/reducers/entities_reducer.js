import { combineReducers } from 'redux';

import users from './users_reducer';
import albums from './albums_reducer';
import bands from './bands_reducer';

export default combineReducers ({
  users,
  albums,
  bands
});