json.albums do
    json.array! @albums, partial: 'api/albums/album', as: :album
end