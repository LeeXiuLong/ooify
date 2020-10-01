# json.extract! @playlist, :id, :name, :user_id, 
json.playlist do
    json.extract! playlist, :id, :name, :user_id
end

json.playlist_songs do
    playlist.playlist_songs.each {|playlist_song| json.set! playlist_song.id, playlist_song}
end

# json.songs do
#     json.set! 
# end

json.songs do
    json.partial! "/api/songs/songs", songs:playlist.songs
end
    # @playlist.songs.each { |song| json.set! song.id, song}

json.artists do
    playlist.songs.each { |song| json.set! song.artist_id, song.artist.name }
end

json.albums do 
    playlist.songs.each do |song| 
        json.set! song.album_id, song.album.name
        json.artworkURL url_for(song.album.album_artwork)
    end
end

#json.playlist :songs, :playlist_songs
#   do json.extract! @playlist
#json.songs do
#  @playlist.songs.each do |song|
#  json.set(song.id) do
#json.artists


# Playlist.includes(songs: :artist).find(params[:id])