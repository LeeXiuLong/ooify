json.array! @albums.each do |album|
    json.extract! album, :id, :name, :artist_id, :release_year, :label
    json.artworkURL url_for(album.album_artwork)
end