json.albums do
    json.array! @albums, partial: 'api/albums/albumband', as: :album
end