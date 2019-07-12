export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS'
export const CLEAR_ALBUM_ERRORS = 'CLEAR_ALBUM_ERRORS';
export const RECEIVE_BAND = 'RECEIVE_BAND';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_SONG_ERRORS= 'RECEIVE_SONG_ERRORS';
import * as APIUtil from '../util/session_api_util';

export const receiveAlbum = payload =>(
    {type: RECEIVE_ALBUM,
    payload}
  )
  
export const fetchAlbum = id => dispatch => (
    APIUtil.fetchAlbum(id).then(
      album => dispatch(receiveAlbum(album))
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
    if (song.imageFile) {
      formData.append('song[audio_file]', song.imageFile);
    }
    console.log("pre-postSong");
    APIUtil.postSong(formData).then(
      song => {
        console.log("song success");
        dispatch(receiveSong(song));
      callback();},
      err => {
        console.log("song error:");
        console.dir(err.responseJSON);
        dispatch(receiveSongErrors(err.responseJSON))
      }

    ) };

  const createTracks = (tracks, finalCallback, dispatch) => {
    console.log("createTracks:");
    console.dir(tracks);
    if (tracks.length == 0){finalCallback();}
    else {let track = tracks.pop();
      console.log("track popped, now tracks is:");
      console.dir(tracks);
      console.log("and track is");
      console.dir(track);
      createSong(track,()=>createTracks(tracks, finalCallback, dispatch))(dispatch);}
  }

  export const createAlbum = ({album, tracks}) => dispatch => {
    console.log("createAlbum:");
    console.dir(album);
    console.dir(tracks);
    console.dir(tracks[1]);
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
        console.dir(payload);
        const album_id = payload.album.id;
        tracks.forEach(track => {
          track.album_id = album_id;
        });
        createTracks(tracks, ()=>dispatch(receiveAlbum(payload)), dispatch);
      },
      err => dispatch(receiveAlbumErrors(err.responseJSON))
    ) };

    export const receiveSong = song =>(
      {type: RECEIVE_SONG,
      song}
    )
    
    

export const receiveAlbumErrors = errors => (
  {type: RECEIVE_ALBUM_ERRORS,
  errors}
);
export const receiveSongErrors = errors => (
  {type: RECEIVE_SONG_ERRORS,
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