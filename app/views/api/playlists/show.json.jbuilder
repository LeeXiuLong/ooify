# json.extract! @playlist, :id, :name, :user_id, 

json.playlist do
    json.extract! @playlist, :id, :name, :user_id
end

# json.songs do
#     json.set! 
# end

json.songs do
    @playlist.songs.each { |song| json.set! song.id, song}
end

json.artists do
    @playlist.songs.each { |song| json.set! song.artist_id, song.artist.name }
end

#json.playlist :songs, :playlist_songs
#   do json.extract! @playlist
#json.songs do
#  @playlist.songs.each do |song|
#  json.set(song.id) do
#json.artists


# Playlist.includes(songs: :artist).find(params[:id])