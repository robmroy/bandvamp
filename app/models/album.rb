class Album < ApplicationRecord
    validates :band_id, :name, presence: true
    
    belongs_to :band,
    class_name: :User,
    foreign_key: :band_id

    has_one_attached :photo
end
