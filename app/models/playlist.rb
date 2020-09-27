class Playlist < ApplicationRecord
    validates :name, presence: {message: "Enter a name for your playlist."}
    validates :user_id, presence: {message: "You are not logged in."}

    belongs_to :user,

    has_many :playlist_songs,
    primary_key: :id,
    foreign_key: :playlist_id,
    class_name: :PlaylistSong

    has_many :songs,
    through: :playlist_songs,
    source: :song

    belongs_to :user
end
