json.extract! song, :id, :album_id, :name, :track_number, :description


if song.audio_file.attached?
    json.audioUrl url_for(song.audio_file)
end