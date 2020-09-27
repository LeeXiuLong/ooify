class Song < ApplicationRecord

    has_many :playlist_songs,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :PlaylistSong

    has_many :playlists,
    through: :playlist_songs,
    source: :playlist

    has_one_attached :track

    belongs_to :album

    belongs_to :artist

end
