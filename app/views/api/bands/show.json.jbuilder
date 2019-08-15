json.partial! "api/bands/band", band: @band

json.albums @band.albums do |album|
    json.name album.name
    json.id album.id
    json.photoUrl url_for(album.photo)
    json.songs do
        json.array! album.songs, partial: 'api/songs/song', as: :song
    end
end