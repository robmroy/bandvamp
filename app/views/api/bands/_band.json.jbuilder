json.extract! band, :id, :username, :band_name, :band_description, :email, :background_color

if band.photo.attached?
    json.photoUrl url_for(band.photo)
end
if band.banner.attached?
    json.bannerUrl url_for(band.banner)
end

