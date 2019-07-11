
import merge from 'lodash/merge';

import { RECEIVE_ALBUM } from '../actions/entities_actions';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM:
      return merge({}, state, { [action.song.id]: action.song });
    default:
      return state;
  }
}

export default songsReducer;