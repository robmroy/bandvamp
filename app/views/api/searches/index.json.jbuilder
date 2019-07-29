json.searchResults do
    json.array! @bands.each do |band|
      json.set! :type, 'band'
      json.partial! 'api/bands/band', band: band
    end

    json.array! @albums.each do |album|
      json.set! :type, 'album'
      json.partial! 'api/albums/album', album: album
    end

    json.array! @songs.each do |song|
      json.set! :type, 'song'
      json.partial! 'api/songs/song', song: song
    end
end