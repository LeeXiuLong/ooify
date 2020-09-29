songs.each do |song|
    json.set! song.id do
        json.extract! song, :id, :title, :artist_id, :album_id, :runtime, :track_number
        json.trackUrl url_for(song.track)
    end
end
