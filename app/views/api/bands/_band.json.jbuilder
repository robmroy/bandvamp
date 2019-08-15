json.extract! band, :id, :username, :band_name, :band_description, :email, :background_color

if band.photo.attached?
    json.photoUrl url_for(band.photo)
end
if band.banner.attached?
    json.bannerUrl url_for(band.banner)
end

json.albums band.albums do |album|
    json.name album.name
    json.id album.id
    json.photoUrl url_for(album.photo)
    json.songs do
        json.array! album.songs, partial: 'api/songs/song', as: :song
      end
  end