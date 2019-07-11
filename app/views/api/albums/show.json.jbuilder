json.album do
    json.partial! 'api/albums/album', album: @album
  end
  
  json.songs do
    json.array! @album.songs, partial: 'api/songs/song', as: :song
  end
  
  json.band do
    json.partial! 'api/bands/band', band: @album.band
  end
  