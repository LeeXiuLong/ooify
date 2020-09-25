json.extract! @artist, :id, :name
json.proPicUrl url_for(@artist.profile_picture)
