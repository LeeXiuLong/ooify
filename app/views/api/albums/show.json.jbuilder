json.extract! @album, :id, :name, :artist_id, :release_year, :label
json.artworkUrl url_for(@album.album_artwork)