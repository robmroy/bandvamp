json.partial! "api/users/user", user: @user

if @user.photo.attached?
    json.photoUrl url_for(@user.photo)
end

json.followed_bands do 
    json.array!(@user.followed_bands) do |band|
        json.id band.id
        json.band_name band.band_name
        json.photoUrl url_for(band.photo)
    end
end

json.purchased_albums do 
    json.array!(@user.purchased_albums) do |album|
        json.id album.id
        json.name album.name
        json.band_id album.band_id
        json.band_name album.band.band_name
        json.photoUrl url_for(album.photo)
    end
end
