class Album < ApplicationRecord
    validates :band_id, :name, presence: true
    has_one_attached :photo
end
