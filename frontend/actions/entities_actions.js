export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';
export const CLEAR_ALBUM_ERRORS = 'CLEAR_ALBUM_ERRORS';
export const RECEIVE_BAND = 'RECEIVE_BAND';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS';
export const CLEAR_RECEIVED_ALBUM_ID = 'CLEAR_RECEIVED_ALBUM_ID';
export const RECEIVE_USER = 'RECEIVE_USER'
import * as APIUtil from '../util/session_api_util';

export const receiveAlbum = payload => (
  {
    type: RECEIVE_ALBUM,
    payload
  }
)

export const receiveAllAlbums = payload => (
  {
    type: RECEIVE_ALL_ALBUMS,
    payload
  }
)

export const receiveUser = user => (
  { type: RECEIVE_USER, user }
)
export const fetchAlbum = id => dispatch => (
  APIUtil.fetchAlbum(id).then(
    album => dispatch(receiveAlbum(album))
  )
);

export const fetchAllAlbums = () => dispatch => (
  APIUtil.fetchAllAlbums().then(
    albums => dispatch(receiveAllAlbums(albums))
  )
);

export const createSong = (song, callback) => dispatch => {
  const formData = new FormData();
  formData.append('song[name]',
    song.name);
  formData.append('song[description]',
    song.description);
  formData.append('song[album_id]',
    song.album_id);
  formData.append('song[track_number]',
    song.track_number);
  if (song.audioFile) {
    formData.append('song[audio_file]', song.audioFile);
  }

  APIUtil.postSong(formData).then(
    song => {
      dispatch(receiveSong(song));
      callback();
    },
    err => {
      dispatch(receiveSongErrors(err.responseJSON))
    }

  )
};

const createTracks = (tracks, finalCallback, dispatch) => {
  if (tracks.length == 0) { finalCallback(); }
  else {
    let track = tracks.pop();
    createSong(track, () => createTracks(tracks, finalCallback, dispatch))(dispatch);
  }
}

export const createAlbum = ({ album, tracks }, cb) => dispatch => {
  const formData = new FormData();
  formData.append('album[name]',
    album.name);
  formData.append('album[band_id]',
    album.band_id);
  formData.append('album[description]',
    album.description);
  if (album.imageFile) {
    formData.append('album[photo]', album.imageFile);
  }
  APIUtil.postAlbum(formData).then(
    payload => {
      const album_id = payload.album.id;
      tracks.forEach(track => {
        payload.songs.push(track);
        track.album_id = album_id;
      });
      createTracks(tracks, () => { if (cb) cb() }, dispatch);
    },
    err => dispatch(receiveAlbumErrors(err.responseJSON))
  )
};

export const receiveSong = song => (
  {
    type: RECEIVE_SONG,
    song
  }
)


export const receiveAlbumErrors = errors => (
  {
    type: RECEIVE_ALBUM_ERRORS,
    errors
  }
);

export const receiveSongErrors = errors => (
  {
    type: RECEIVE_SONG_ERRORS,
    errors
  }
);

export const clearAlbumErrors = () => (
  { type: CLEAR_ALBUM_ERRORS }
);

export const receiveBand = band => ({
  type: RECEIVE_BAND,
  band
})

export const fetchBand = id => dispatch => (
  APIUtil.fetchBand(id).then(
    band => dispatch(receiveBand(band))
  )
);

export const fetchUser = (id, callback) => dispatch => (
  APIUtil.fetchUser(id).then(
    user => {
      dispatch(receiveUser(user));
      if (callback) callback(user);
    }
  )
);

export const clearReceivedAlbumId = () => (
  { type: CLEAR_RECEIVED_ALBUM_ID }
)

export const editBand = band => dispatch => (
  APIUtil.editBand(band).then(
    band => dispatch(receiveBand(band))
  )
);

// export const editUser = user => dispatch => (
//   APIUtil.editUser(user).then(
//     user => dispatch(receiveUser(user))
//   )
// );

export const editUser = (user, callback) => dispatch => {
  const formData = new FormData();

  if (user.user_description)
    formData.append('user[user_description]',
      user.user_description);

  if (user.photo) {
    formData.append('user[photo]', user.photo);
  }
  APIUtil.editUser({ formData, id: user.id }).then(
    user => dispatch(receiveUser(user))
  )
};