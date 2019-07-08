export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
import * as APIUtil from '../util/session_api_util';

export const receiveAlbum = album =>(
    {type: RECEIVE_ALBUM,
    album}
  )
  
export const fetchAlbum = id => dispatch => (
    APIUtil.fetchAlbum(id).then(
      album => dispatch(receiveAlbum(album))
    )
  );

  export const createAlbum = formData => dispatch => (
    APIUtil.postAlbum(formData).then(
      album => dispatch(receiveAlbum(album))
    )
  );