class Album < ApplicationRecord

    validates :name, presence: true
    validates :artist_id, presence: true
    validates :release_year, presence: true
    validates :label, presence: true

    has_one_attached :album_artwork

    belongs_to :artist

    has_many :songs
end