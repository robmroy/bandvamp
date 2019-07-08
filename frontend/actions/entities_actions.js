export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS'
export const CLEAR_ALBUM_ERRORS = 'CLEAR_ALBUM_ERRORS';
export const RECEIVE_BAND = 'RECEIVE_BAND';

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
      album => dispatch(receiveAlbum(album)),
      err => dispatch(receiveAlbumErrors(err.responseJSON))
    )
  );


export const receiveAlbumErrors = errors => (
  {type: RECEIVE_ALBUM_ERRORS,
  errors}
);

export const clearAlbumErrors = () => (
  {type: CLEAR_ALBUM_ERRORS}
);

export const receiveBand = band => ({
  type: RECEIVE_BAND,
  band
});

export const fetchBand = id => dispatch => (
  APIUtil.fetchBand(id).then(
    band  => dispatch(receiveBand(band))
  )
);