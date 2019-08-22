json.searchResults do
    json.array! @bands.each do |band|
      json.set! :type, 'artist'
      json.partial! 'api/bands/band', band: band
    end

    json.array! @albums.each do |album|
      json.set! :type, 'album'
      json.partial! 'api/albums/album', album: album
      json.band_name album.band.band_name
    end

    json.array! @songs.each do |song|
      json.set! :type, 'track'
      json.partial! 'api/songs/songalbum', song: song
      json.band_name song.album.band.band_name
    end
end