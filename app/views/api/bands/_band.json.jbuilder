json.extract! band, :id, :username, :band_name, :band_description, :email
if band.photo.attached?
    json.photoUrl url_for(band.photo)
end
