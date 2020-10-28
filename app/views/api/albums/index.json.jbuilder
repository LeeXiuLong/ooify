@albums.each do |album|
    json.set! album.id do
        json.extract! album, :id, :name, :artist, :release_year, :label
        json.artworkURL url_for(album.album_artwork)
    end
end