json.extract! @album, :id, :name, :description
if @album.photo.attached?
    json.photoUrl url_for(@album.photo)
end
