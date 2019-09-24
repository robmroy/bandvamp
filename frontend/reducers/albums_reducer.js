
import merge from 'lodash/merge';

import { RECEIVE_ALBUM, CLEAR_RECEIVED_ALBUM_ID, RECEIVE_ALL_ALBUMS } from '../actions/entities_actions';

const albumsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM:
      const albumId = action.payload.album.id;
      return merge({}, state, {
        [albumId]: action.payload,
        receivedId: albumId
      });
    case RECEIVE_ALL_ALBUMS:
      return action.payload.albums;
    // case CLEAR_RECEIVED_ALBUM_ID:
    //   return merge({}, state, {receivedId: null})
    default:
      return state;
  }
}

export default albumsReducer;