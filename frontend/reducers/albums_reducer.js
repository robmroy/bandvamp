
import merge from 'lodash/merge';

import { RECEIVE_ALBUM } from '../actions/entities_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM:
      const album = action.payload.album;
      return merge({}, state, { [album.id]: album });
    default:
      return state;
  }
}

export default albumsReducer;