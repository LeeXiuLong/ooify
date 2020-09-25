json.array! @songs do |song|
    json.extract! song, :id, :title, :artist_id, :album_id, :runtime, :track_number
    json.trackUrl url_for(song.track)
end