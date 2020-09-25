class PlaylistSong < ApplicationRecord
    validates :playlist_id, presence: true
    validates :user_id, presence: true
end
