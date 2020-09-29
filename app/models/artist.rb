class Artist < ApplicationRecord

    validates :name, presence: true

    has_one_attached :profile_picture

    has_many :albums

    has_many :songs
end
