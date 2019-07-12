
import merge from 'lodash/merge';

import { RECEIVE_ALBUM } from '../actions/entities_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM:
      return merge({}, state, { 
        [action.payload.album.id]: action.payload });
    default:
      return state;
  }
}

export default albumsReducer;