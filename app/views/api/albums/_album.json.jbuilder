json.extract! album, :id, :name, :description, :band_id
if album.photo.attached?
    json.photoUrl url_for(album.photo)
end