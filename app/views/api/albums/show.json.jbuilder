json.extract! @album, :id, :name, :artist, :release_year, :label
json.artworkUrl url_for(@album.album_artwork)