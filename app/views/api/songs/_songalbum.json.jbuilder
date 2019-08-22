json.extract! song, :id, :album_id, :name, :track_number, :description, :album



if song.audio_file.attached?
    json.audioUrl url_for(song.audio_file)
end

album = song.album
if album.photo.attached?
    json.photoUrl url_for(album.photo)
end