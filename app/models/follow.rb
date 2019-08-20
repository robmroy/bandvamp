class Follow < ApplicationRecord

    validates :fan_id, :band_id, presence: true

    belongs_to :followed_band,
    class_name: :User,
    foreign_key: :band_id
end
